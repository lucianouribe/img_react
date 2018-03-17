class Proyecto < ApplicationRecord
  has_many :pasos, dependent: :destroy
  # belongs_to :user
  # binding.pry
  def self.order_by_id
    # binding.pry
    Proyecto.orden("id ASC")
    # cuando se pueda cambiar el orden de verdad, este sera Proyecto.order('order ASC')
  end
end
