class Api::ProyectosController < ApplicationController
  before_action :set_api_proyecto, only: [:show, :edit, :update, :destroy]
  skip_before_action :verify_authenticity_token


  def index
    # binding.pry
    @api_proyectos = Proyecto.order_by_id.all

    # binding.pry
  end

  def show
    render :show
  end

  def new
    @api_proyecto = Proyecto.new
  end

  def edit
  end

  def create
    # 4
    # binding.pry
    @api_proyecto = Proyecto.new(api_proyecto_params)
    # binding.pry

    if @api_proyecto.save
      # binding.pry
      render :show, status: :created
    else
      render json: @api_proyecto.errors, status: :unprocessable_entity
    end

  end

  def update
    # binding.pry
    if @api_proyecto.update(api_proyecto_params)
      # it does change and have the new values as @api_proyecto
      # binding.pry
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
      # 1
      # binding.pry
      @api_proyecto = Proyecto.find(params[:id])
    end

    def api_proyecto_params
      # 3 (#2 es el modelo)
      # binding.pry
      params.require(:proyecto).permit(:name, :topic, :subtopic, :difficulty, :order)
    end
end
