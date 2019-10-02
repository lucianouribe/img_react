class Api::VerbsController < ApplicationController
  # before_action :set_api_verb, only: [:show, :edit, :update, :destroy]


  # def index
  #   @api_verbs = Verb.all
  # end

  # def show
  # end

  # def new
  #   @api_verb = Verb.new
  # end

  # def edit
  # end

  # def create
  #   @api_verb = Verb.new(api_verb_params)

  #     if @api_verb.save
  #       render :show, status: :created
  #     else
  #       render json: @api_verb.errors, status: :unprocessable_entity
  #     end

  # end

  # def update
  #     if @api_verb.update(api_verb_params)
  #       render :show, status: :ok
  #     else
  #       render json: @api_verb.errors, status: :unprocessable_entity
  #     end
  # end

  # def destroy
  #   @api_verb.destroy
  #     format.json { head :no_content }
  # end

  # private
  #   def set_api_verb
  #     @api_verb = Verb.find(params[:id])
  #   end

  #   def api_verb_params
  #     params.require(:german_game).permit(:verb_type, :theme, :subtheme, :infinitive, :praesens, :praeteritum, :futur_i, :perfekt, :plusquamperfekt, :futur_ii, :ch, :level, :picture, :partizip_perfekt)
  #   end
end
