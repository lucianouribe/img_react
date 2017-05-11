require 'pry'
class Api::TranslatorsController < ApplicationController

  def translate
    info = { inphrase: api_translator_params[:inphrase], lang_first: api_translator_params[:lang_first], lang_second: api_translator_params[:lang_second]}
    new_info = Translator.start_process(info)
    @translator = Translator.new(new_info)
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
