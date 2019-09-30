class Api::ThemesController < ApplicationController
  before_action :set_api_theme, only: [:show, :edit, :update, :destroy]


  def index
    @api_themes = Theme.all
  end

  def show
  end

  def new
    @api_theme = Theme.new
  end

  def edit
  end

  def create
    @api_theme = Theme.new(api_theme_params)

      if @api_theme.save
        render :show, status: :created
      else
        render json: @api_theme.errors, status: :unprocessable_entity
      end

  end

  def update
      if @api_theme.update(api_theme_params)
        render :show, status: :ok
      else
        render json: @api_theme.errors, status: :unprocessable_entity
      end
  end

  def destroy
    @api_theme.destroy
      format.json { head :no_content }
  end

  private
    def set_api_theme
      @api_theme = Theme.find(params[:id])
    end

    def api_theme_params
      params.require(:german_game).permit(:theme_name, :hearts, :points, :status, :level, :subtheme)
    end
end
