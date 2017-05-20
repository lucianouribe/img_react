require 'pry'
class Api::MorsesController < ApplicationController

  def go_to_model
    info = { inphrase: api_morse_params[:inphrase], lang_first: api_morse_params[:lang_first], lang_second: api_morse_params[:lang_second]}
    new_info = Morse.start_process(info)
    @morse = Morse.new(new_info)
    @morse.save
  end

  def comes_from_model
    @morse = Morse.last
    destroy
  end

  def destroy
    @api_morses = Morse.last
    @api_morses.destroy
  end

  private
  def api_morse_params
    params.require(:morse).permit(:inphrase, :outphrase, :lang_first, :lang_second)
  end

end
