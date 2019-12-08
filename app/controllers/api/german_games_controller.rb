class Api::GermanGamesController < ApplicationController
  before_action :set_api_game, only: [:update]

  def index
    @german_game = current_user.german_game
    @worlds = World.all
    getWorldTheme
  end

  def getWorldTheme
    @themes = []
    World.all.order_by_id.each {|t| @themes << [t.name, t.image.url, t.id]}
    return @themes
  end

  def reset
    reset_worlds
    reset_subthemes
    reset_player
  end

  def update
    if @game.update(game_params)
      render :json => @game, status: :ok
    else
      render json: @game.errors, status: :unprocessable_entity
    end
  end

  private
  def reset_worlds
    World.all.each do |w|
      w.update_attribute :level,  1
      w.update_attribute :points,  0
      w.update_attribute :status,  'open'
    end
  end

  def reset_subthemes
    Subtheme.all.each do |s|
      s.update_attribute :points,  0
      s.update_attribute :status,  'open'
      s.update_attribute :hearts,  0
    end
  end

  def reset_player
    player = GermanGame.first
    player.update_attribute :level, 1
    player.update_attribute :lifes, 3
    player.update_attribute :punctuation, 0
    player.update_attribute :punctuation_4_total, 0
  end

  def set_api_game
    @game = GermanGame.find(params[:id])
  end

  def game_params
    params.require(:game).permit(:lifes, :punctuation, :punctuation_4_total, :level)
  end
end
