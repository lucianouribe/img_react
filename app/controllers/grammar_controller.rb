class GrammarController < ApplicationController

  def get_text
    text = Grammar.start_process(info)
    @text = Translator.new(text)
  end

end