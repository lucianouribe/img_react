class Api::GermanGamesController < ApplicationController
  before_action :set_api_game, only: [:update]

  def index
    @german_game = current_user.german_game
    @worlds = World.all
    getWorldTheme
  end

  def getWorldTheme
    @themes = []
    World.all.order_by_id.each {|t| @themes << [t.name, t.image.url]}
    return @themes
  end

  def update
    if @game.update(game_params)
      render :json => @game, status: :ok
    else
      render json: @game.errors, status: :unprocessable_entity
    end
  end

  private
  def set_api_game
    @game = GemanGame.find(params[:id])
  end

  def game_params
    params.require(:game).permit(:points, :level)
  end
end
