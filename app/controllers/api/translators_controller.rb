require 'pry'
class Api::TranslatorsController < ApplicationController

  def translate
    api_translator_params[:outphrase] = Translator.hello(api_translator_params)
    @translator = Translator.new(api_translator_params)
    @translator.save
  end

  def translated
    @translator = Translator.last
    destroy
  end

  def destroy
    @api_translators = Translator.last
    @api_translators.destroy
  end

  private
  def api_translator_params
    params.require(:translator).permit(:inphrase, :outphrase, :lang_first, :lang_second)
  end

end
