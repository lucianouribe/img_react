require 'pry'
class Api::PasosController < ApplicationController
  before_action :set_api_proyecto
  before_action :set_api_paso, only: [:show, :edit, :update, :destroy]

  def index
    @api_pasos = @api_proyecto.pasos.order_by_id.all
  end

  def show
  end

  def new
    @api_paso = @api_proyecto.pasos.new
  end

  def edit
  end

  def create
    # 4
    if params[:estilo] == 'download'
      Paso.upload_image(params)
      nuevo_estilo = 'link-image'
      new_params = { step: params[:step], orden: params[:orden], estilo: nuevo_estilo, tuto_link: params[:tuto_link], video_link: params[:video_link], image_link: params[:image_link]}
      @api_paso = @api_proyecto.pasos.new(new_params)
    else
      new_params = { step: params[:step], orden: params[:orden], estilo: params[:estilo], tuto_link: params[:tuto_link], video_link: params[:video_link], image_link: params[:image_link]}
    end

    @api_paso = @api_proyecto.pasos.new(new_params)

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

  def destroy
    image_to_delete = @api_paso[:image_link]
    @api_paso.destroy
    Paso.delete_me(image_to_delete)
    head :no_content
  end


  private


  def set_api_proyecto
    # 1
    @api_proyecto = Proyecto.find(params[:proyecto_id])
  end

  def set_api_paso
    # binding.pry
    @api_paso = @api_proyecto.pasos.find(params[:id])
  end

  def api_paso_params
    # 3 (#2 es el modelo)
    params.require(:paso).permit(:step, :orden, :estilo, :tuto_link, :video_link, :image_link)
  end

end
