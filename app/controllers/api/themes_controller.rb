class Api::ThemesController < ApplicationController
  before_action :set_api_theme, only: [:update]
  
  def update
    if @api_theme.update(api_theme_params)
      render :json => @api_theme, status: :ok
    else
      render json: @api_theme.errors, status: :unprocessable_entity
    end
  end

  private
  def set_api_theme
    @api_theme = World.find(params[:id])
  end

  def api_theme_params
    params.require(:theme).permit(:points, :level)
  end
end
