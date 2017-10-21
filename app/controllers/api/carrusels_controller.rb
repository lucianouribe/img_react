require 'pry'
class Api::CarruselsController < ApplicationController
  before_action :set_api_carrusel, only: [:show, :edit, :update, :destroy]
  skip_before_action :verify_authenticity_token

  # GET /api/carrusels.json
  def index
    @api_carrusels = Carrusel.all
  end

  # GET /api/carrusels/1.json
  def show
  end

  # GET /api/carrusels/new
  def new
    @api_carrusel = Carrusel.new
  end

  # GET /api/carrusels/1/edit
  def edit
  end

  # POST /api/carrusels.json
  def create
    # one_param = { picture: params[:picture], name: params[:name] }
    Carrusel.upload_image(params)
    new_params = { name: params[:name], image: params[:image], infopic: params[:infopic], role: params[:role]}
    @api_carrusel = Carrusel.new(new_params)
    respond_to do |format|
      if @api_carrusel.save
        format.json { render :show, status: :created }
      else
        format.json { render json: @api_carrusel.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /api/carrusels/1.json
  def update
    respond_to do |format|
      if @api_carrusel.update(api_carrusel_params)
        format.json { render :show, status: :ok }
      else
        format.json { render json: @api_carrusel.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /api/carrusels/1.json
  def destroy
    info_from_pic = @api_carrusel[:image]
    @api_carrusel.destroy
    Carrusel.delete_me(info_from_pic)
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_api_carrusel
      @api_carrusel = Carrusel.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def api_carrusel_params
      params.require(:carrusel).permit(:name, :image, :infopic, :role, :picture)
    end
end
