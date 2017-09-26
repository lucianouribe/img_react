class Api::DescripcionsController < ApplicationController
  before_action :set_api_descripcion, only: [:show, :edit, :update, :destroy]


  def index
    @api_descripcions = Descripcion.all
  end

  def show
  end

  def new
    @api_descripcion = Descripcion.new
  end

  def edit
  end

  def create
    @api_descripcion = Descripcion.new(api_descripcion_params)

      if @api_descripcion.save
        render :show, status: :created
      else
        render json: @api_descripcion.errors, status: :unprocessable_entity
      end

  end

  def update
      if @api_descripcion.update(api_descripcion_params)
        render :show, status: :ok
      else
        render json: @api_descripcion.errors, status: :unprocessable_entity
      end
  end

  def destroy
    @api_descripcion.destroy
      format.json { head :no_content }
  end

  private
    def set_api_descripcion
      @api_descripcion = Descripcion.find(params[:id])
    end

    def api_descripcion_params
      params.require(:descripcion).permit(:campo, :titulo, :contenido, :lenguaje)
    end
end
