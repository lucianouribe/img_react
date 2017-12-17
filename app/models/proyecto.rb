class Proyecto < ApplicationRecord
  has_many :pasos, dependent: :destroy
  # binding.pry
  def self.order_by_id
    # binding.pry
    Proyecto.order("id ASC")
    # cuando se pueda cambiar el orden de verdad, este sera Proyecto.order('order ASC')
  end
end
