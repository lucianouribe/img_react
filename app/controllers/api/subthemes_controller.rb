class Api::SubthemesController < ApplicationController
  before_action :set_theme, only: [:index, :game]

  def index
    @api_subthemes = Subtheme.where(theme: "#{@theme}")
    render :json => @api_subthemes.to_json(:methods => [:avatar_url])
  end

  def game
    # here you pass the word
    @words = Word.where(subtheme: "#{@theme}")
    render json: @words
  end

  private
  
  def set_theme
    get_url
    @theme = @url_path[:theme]
  end
  
  def get_url
    @url_path = request.query_parameters
  end
end
