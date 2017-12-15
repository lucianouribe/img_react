require 'pry'
class Paso < ApplicationRecord
  belongs_to :proyecto
  has_many :procoms, dependent: :destroy

  # binding.pry
  def self.order_by_id
    Paso.order('id ASC')
  end
end
