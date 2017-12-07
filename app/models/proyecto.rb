class Proyecto < ApplicationRecord
  has_many :pasos, dependent: :destroy
end
