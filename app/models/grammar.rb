
class Grammar < ApplicationRecord

  def self.start_process(text)
    text
    get_text(text)
  end

  def self.get_text(text)
    text
  end

end
