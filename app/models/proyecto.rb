class Proyecto < ApplicationRecord
  has_many :pasos, dependent: :destroy
  # belongs_to :user
  def self.order_by_id
    Proyecto.order("id ASC")
    # cuando se pueda cambiar el orden de verdad, este sera Proyecto.order('order ASC')
  end
end
