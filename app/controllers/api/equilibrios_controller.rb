require 'pry'
class Api::EquilibriosController < ApplicationController

  def go_to_model
    binding.pry
  #   info = { inphrase: api_morse_params[:inphrase], lang_first: api_morse_params[:lang_first], lang_second: api_morse_params[:lang_second]}
  #   new_info = Morse.start_process(info)
  #   @morse = Morse.new(new_info)
  #   @morse.save
  end
  #
  def comes_from_model
  #   @morse = Morse.last
  #   # binding.pry
  #   destroy
  end
  #
  def destroy
  #   # binding.pry
  #   @api_morses = Morse.last
  #   @api_morses.destroy
  end
  #
  private
  def api_equilibrio_params
    params.require(:morse).permit(:gasto, :item, :unidad, :valor)
  end

end
