require 'pry'
class Translator < ApplicationRecord

  def self.translate(params)
    binding.pry
  end
  def self.eng_rus
    binding.pry
  end
  def self.deu_rus
    binding.pry
  end


  # Person.all.by_name | asi se llama thats how you can call them
  def self.by_name
    order(:name)
  end
end
