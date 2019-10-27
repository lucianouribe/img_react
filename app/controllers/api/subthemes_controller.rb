class Api::SubthemesController < ApplicationController
  before_action :set_theme, only: [:index, :game]
  before_action :set_api_subtheme, only: [:update]

  def index
    @api_subthemes = Subtheme.where(theme: "#{@theme}").order_by_id
    render :json => @api_subthemes.to_json(:methods => [:avatar_url])
  end

  def game
    subtheme = Subtheme.where(name: @theme).first
    subtheme.img_url = subtheme.image.url
    @words = Word.where(subtheme: "#{subtheme.id}").where(level: "#{subtheme.level}").shuffle.sample(8)
    @verbs = Verb.where(subtheme: "#{subtheme.id}").where(level: "#{subtheme.level}").shuffle.sample(8)
    @phrases = Phrase.where(subtheme: "#{subtheme.id}").where(level: "#{subtheme.level}").shuffle.sample(8)
    render json: { words: @words, verbs: @verbs, phrases: @phrases, subtheme: subtheme, subtheme_img: subtheme.img_url}
  end
  
  def update
    if @api_subtheme.update(api_subtheme_params)
      render :json => @api_subtheme, status: :ok
    else
      render json: @api_subtheme.errors, status: :unprocessable_entity
    end
  end

  private
  
  def set_theme
    get_url
    @theme = @url_path[:theme]
  end
  
  def get_url
    @url_path = request.query_parameters
  end

  def set_api_subtheme
    @api_subtheme = Subtheme.find(params[:id])
  end

  def api_subtheme_params
    params.require(:subtheme).permit(:points, :level)
  end
end
