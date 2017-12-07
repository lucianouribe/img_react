require 'pry'
class Api::PasosController < ApplicationController
  before_action :set_api_proyecto
  before_action :set_api_paso, only: [:show, :edit, :update, :destroy]

  def index
    # @api_pasos = Paso.all
    @api_pasos = @api_proyecto.pasos.all
  end

  def show
  end

  def new
    # binding.pry
    @api_paso = @api_proyecto.pasos.new
  end

  def edit
    # binding.pry
  end

  def create
    # 4
    @api_paso = @api_proyecto.pasos.new(api_paso_params)
    # binding.pry

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
    @api_paso.destroy
    head :no_content
  end

  private

  def api_paso_params
    # 3 (#2 es el modelo)
    # binding.pry
    params.require(:paso).permit(:step, :orden, :estilo)
  end

  def set_api_proyecto
    # binding.pry
    # 1
    @api_proyecto = Proyecto.find(params[:proyecto_id])
  end

  def set_api_paso
    # binding.pry
    @api_paso = @api_proyecto.pasos.find(params[:id])
  end

end
