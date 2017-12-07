class Api::ProyectosController < ApplicationController
  before_action :set_api_proyecto, only: [:show, :edit, :update, :destroy]
  skip_before_action :verify_authenticity_token


  def index
    @api_proyectos = Proyecto.all
  end

  def show
  end

  def new
    @api_proyecto = Proyecto.new
  end

  def edit
  end

  def create
    @api_proyecto = Proyecto.new(api_proyecto_params)

    if @api_proyecto.save
      render :show, status: :created
    else
      render json: @api_proyecto.errors, status: :unprocessable_entity
    end

  end

  def update
    if @api_proyecto.update(api_proyecto_params)
      render :show, status: :ok
    else
      render json: @api_proyecto.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @api_proyecto.destroy
    head :no_content
  end

  private
    def set_api_proyecto
      @api_proyecto = Proyecto.find(params[:id])
    end

    def api_proyecto_params
      params.require(:proyecto).permit(:name, :topic, :subtopic, :difficulty, :order)
    end
end
