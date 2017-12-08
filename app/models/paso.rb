require 'pry'
class Paso < ApplicationRecord
  belongs_to :proyecto
  has_many :procoms, dependent: :destroy

  # binding.pry
end
