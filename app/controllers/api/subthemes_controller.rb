class Api::SubthemesController < ApplicationController
  before_action :set_api_world, only: [:index]

  def index
    render json: @api_subthemes
  end

  private
  
  def set_api_world
    url_path = request.query_parameters
    world = url_path[:theme]
    @api_subthemes = Subtheme.where(theme: "#{world}")
  end
end
