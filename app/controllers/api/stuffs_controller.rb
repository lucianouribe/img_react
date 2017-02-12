class Api::StuffsController < ApplicationController
  before_action :set_api_stuff, only: [:show, :edit, :update, :destroy]

  # GET /api/stuffs
  # GET /api/stuffs.json
  def index
    @api_stuffs = Api::Stuff.all
  end

  # GET /api/stuffs/1
  # GET /api/stuffs/1.json
  def show
  end

  # GET /api/stuffs/new
  def new
    @api_stuff = Api::Stuff.new
  end

  # GET /api/stuffs/1/edit
  def edit
  end

  # POST /api/stuffs
  # POST /api/stuffs.json
  def create
    @api_stuff = Api::Stuff.new(api_stuff_params)

    respond_to do |format|
      if @api_stuff.save
        format.json { render :show, status: :created, location: @api_stuff }
      else
        format.json { render json: @api_stuff.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /api/stuffs/1
  # PATCH/PUT /api/stuffs/1.json
  def update
    respond_to do |format|
      if @api_stuff.update(api_stuff_params)
        format.json { render :show, status: :ok, location: @api_stuff }
      else
        format.json { render json: @api_stuff.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /api/stuffs/1
  # DELETE /api/stuffs/1.json
  def destroy
    @api_stuff.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_api_stuff
      @api_stuff = Api::Stuff.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def api_stuff_params
      params.fetch(:api_stuff, {})
    end
end
