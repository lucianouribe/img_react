class Api::StepsController < ApplicationController
  before_action :set_api_proyecto
  before_action :set_api_paso, only: [:show, :edit, :update, :destroy]

  def index
    @api_proyecto = Proyecto.find(params[:proyecto_id])
    render json: @api_proyecto.pasos
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
      # new_params = { step: params[:step], orden: params[:orden], estilo: nuevo_estilo, procom_link: params[:procom_link], video_link: params[:video_link], image_link: params[:image_link] }
      new_params = { step: params[:step] }
      @api_paso = @api_proyecto.pasos.new(new_params)
    else
      # new_params = { step: params[:step], orden: params[:orden], estilo: params[:estilo], procom_link: params[:procom_link], video_link: params[:video_link], image_link: params[:image_link] }
      new_params = { step: params[:step]}
    end

    @api_paso = @api_proyecto.pasos.new(new_params)

    sleep 0.3
    if @api_paso.save
      render json: @api_paso
    else
      render json: @api_paso.errors, status: :unprocessable_entity
    end
  end

  def update
    if @api_paso.update(api_paso_params)
      render json: @api_paso
    else
      render json: @api_paso.errors, status: :unprocessable_entity
    end
  end

  def destroy
    # if @api_paso[:image_link] != 'undefined'
    #   image_to_delete = @api_paso[:image_link]
    #   Paso.delete_me(image_to_delete)
    # end
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

  # def api_paso_params
  #   params.require(:paso).permit(:step, :orden, :estilo, :procom_link, :video_link, :image_link )
  # end

  def api_paso_params
    params.require(:paso).permit(:step)
  end

end
