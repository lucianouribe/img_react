class Api::WordsController < ApplicationController
  before_action :set_api_word, only: [:show, :edit, :update, :destroy]


  def index
    @api_words = Word.all
  end

  def show
  end

  def new
    @api_word = Word.new
  end

  def edit
  end

  def create
    @api_word = Word.new(api_word_params)

      if @api_word.save
        render :show, status: :created
      else
        render json: @api_word.errors, status: :unprocessable_entity
      end

  end

  def update
      if @api_word.update(api_word_params)
        render :show, status: :ok
      else
        render json: @api_word.errors, status: :unprocessable_entity
      end
  end

  def destroy
    @api_word.destroy
      format.json { head :no_content }
  end

  private
    def set_api_word
      @api_word = Word.find(params[:id])
    end

    def api_word_params
      params.require(:german_game).permit(:word_type, :theme, :subtheme, :noun, :article, :plural, :ch, :level)
    end
end
