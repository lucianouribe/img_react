class Api::ProyectosController < ApplicationController
  before_action :set_api_proyecto, only: [:show, :edit, :update, :destroy]
  skip_before_action :verify_authenticity_token

  def index
    if current_user
      if current_user.role == 'admin'
        @api_proyectos = Proyecto.order_by_id.all
      else current_user
        @api_proyectos = Proyecto.order_by_id.find_by_sql("select * from proyectos where subtopic != 'collumino'")
      end
    else
      @api_proyectos = Proyecto.order_by_id.find_by_sql("select * from proyectos where subtopic != 'collumino'")
    end
  end

  def desktop_proyectos
    if params[:topic].present? & params[:subtopic].present?
      @api_proyectos = Proyecto.where(topic: params[:topic]).where(subtopic: params[:subtopic])
    elsif params[:topic].present?
      @api_proyectos = Proyecto.where(topic: params[:topic])
    elsif params[:subtopic].present?
      @api_proyectos = Proyecto.where(subtopic: params[:subtopic])
    else
      @api_proyectos = Proyecto.order_by_id.all
    end
    render json: @api_proyectos
  end

  def topics
    proyectos = Proyecto.all
    temp_topics = []
    @topics = []
    proyectos.each do |proyecto|
      if !temp_topics.include? proyecto.topic
        temp_topics << proyecto.topic
      end
    end
    temp_topics.each do |el|
      proy = Proyecto.where(topic: el)
      temp_subtopics = []
      proy.each do |po|
        if !temp_subtopics.include? po.subtopic
          temp_subtopics << po.subtopic
        end
      end
      @topics << { name: el, subtopic: temp_subtopics }
    end
    render json: @topics
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
      params.require(:proyecto).permit(:name, :topic, :subtopic, :difficulty, :orden, :user_id)
    end
end
