class Api::SubthemesController < ApplicationController
  before_action :set_theme, only: [:index, :game]

  def index
    @api_subthemes = Subtheme.where(theme: "#{@theme}").order_by_id
    render :json => @api_subthemes.to_json(:methods => [:avatar_url])
  end

  def game
    subtheme = Subtheme.where(name: @theme).first
    @words = Word.where(subtheme: "#{subtheme.id}").where(level: "#{subtheme.level}").shuffle
    @verbs = Verb.where(subtheme: "#{subtheme.id}").where(level: "#{subtheme.level}").shuffle
    @phrases = Phrase.where(subtheme: "#{subtheme.id}").where(level: "#{subtheme.level}").shuffle
    render json: { words: @words, verbs: @verbs, phrases: @phrases }
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
