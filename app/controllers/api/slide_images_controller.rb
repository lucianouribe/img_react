class Api::SlideImagesController < ApplicationController
  before_action :set_api_slide_image, only: [:show, :edit, :update, :destroy]

  # GET /api/slide_images
  # GET /api/slide_images.json
  def index
    @api_slide_images = SlideImage.all
  end

  # GET /api/slide_images/1
  # GET /api/slide_images/1.json
  def show
  end

  # GET /api/slide_images/new
  def new
    @api_slide_image = SlideImage.new
  end

  # GET /api/slide_images/1/edit
  def edit
  end

  # POST /api/slide_images
  # POST /api/slide_images.json
  def create
    @api_slide_image = SlideImage.new(api_slide_image_params)

    respond_to do |format|
      if @api_slide_image.save
        format.json { render :show, status: :created, location: @api_slide_image }
      else
        format.json { render json: @api_slide_image.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /api/slide_images/1
  # PATCH/PUT /api/slide_images/1.json
  def update
    respond_to do |format|
      if @api_slide_image.update(api_slide_image_params)
        format.json { render :show, status: :ok, location: @api_slide_image }
      else
        format.json { render json: @api_slide_image.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /api/slide_images/1
  # DELETE /api/slide_images/1.json
  def destroy
    @api_slide_image.destroy
    respond_to do |format|
      format.html { redirect_to api_slide_images_url, notice: 'Slide image was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_api_slide_image
      @api_slide_image = SlideImage.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def api_slide_image_params
      params.require(:slide_image).permit(:name, :image, :commentsPerPic, :role, :logo1)
    end
end
