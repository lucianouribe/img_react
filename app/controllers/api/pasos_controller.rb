class Api::PasosController < ApplicationController
  # before_action :set_api_proyecto, except: [:set_last_id, :desktop_paso_update]
  before_action :set_api_proyecto, except: [:set_last_id]
  before_action :set_api_paso, only: [:show, :edit, :update, :destroy]

  def index
    @api_pasos = @api_proyecto.pasos.order_by_id.all
  end

  # def desktop_pasos
  #   @api_proyecto = Proyecto.find(params[:proyecto_id])
  #   render json: @api_proyecto.pasos
  # end

  def set_last_id
    @paso = Paso.all.maximum(:id)
    render :set_last_id, status: :ok
  end

  def show
  end

  def new
    @api_paso = @api_proyecto.pasos.new
  end

  def edit
  end

  def create
    # put this outside in another method (picture_treatment) with @new_params
    if params[:estilo] == 'download'
      Paso.upload_image(params)
      nuevo_estilo = 'link-image'
      new_params = { step: params[:step], orden: params[:orden], estilo: nuevo_estilo, procom_link: params[:procom_link], video_link: params[:video_link], image_link: params[:image_link] }
      @api_paso = @api_proyecto.pasos.new(new_params)
    else
      new_params = { step: params[:step], orden: params[:orden], estilo: params[:estilo], procom_link: params[:procom_link], video_link: params[:video_link], image_link: params[:image_link] }
    end

    @api_paso = @api_proyecto.pasos.new(new_params)

    sleep 0.3
    if @api_paso.save
      render :show, status: :created
    else
      render json: @api_paso.errors, status: :unprocessable_entity
    end
  end

  def update
    if @api_paso.update(api_paso_params)
      render :show, status: :ok
    else
      render json: @api_paso.errors, status: :unprocessable_entity
    end
  end

  # def desktop_paso_update
  #   proyecto = Proyecto.find(params[:proyecto_id])
  #   paso = proyecto.pasos.find(params[:id])
  #   if paso.update(api_paso_de_params)
  #     render json: paso, status: :ok
  #   else
  #     render json: paso.errors, status: :unprocessable_entity
  #   end
  # end

  def destroy
    if @api_paso[:image_link] != 'undefined'
      image_to_delete = @api_paso[:image_link]
      Paso.delete_me(image_to_delete)
    end
    @api_paso.destroy
    head :no_content
  end


  private


  def set_api_proyecto
    @api_proyecto = Proyecto.find(params[:proyecto_id])
  end

  def set_api_paso
    @api_paso = @api_proyecto.pasos.find(params[:id])
  end

  def api_paso_params
    params.require(:paso).permit(:step, :orden, :estilo, :procom_link, :video_link, :image_link )
  end

  # def api_paso_de_params
  #   params.require(:paso).permit(:step )
  # end

end
