class Api::GermanGamesController < ApplicationController
  before_action :set_api_german_game, only: [:show, :edit, :update, :destroy]


  def index
    @api_german_games = GermanGame.all
  end

  def show
  end

  def new
    @api_german_game = GermanGame.new
  end

  def edit
  end

  def create
    @api_german_game = GermanGame.new(api_german_game_params)

      if @api_german_game.save
        render :show, status: :created
      else
        render json: @api_german_game.errors, status: :unprocessable_entity
      end

  end

  def update
      if @api_german_game.update(api_german_game_params)
        render :show, status: :ok
      else
        render json: @api_german_game.errors, status: :unprocessable_entity
      end
  end

  def destroy
    @api_german_game.destroy
      format.json { head :no_content }
  end

  private
    def set_api_german_game
      @api_german_game = GermanGame.find(params[:id])
    end

    def api_german_game_params
      params.require(:german_game).permit(:lifes, :punctuation, :punctuation_4_total, :level)
    end
end
