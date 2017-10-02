class Carrusel < ApplicationRecord
  validates_presence_of :name, :image, :role

  # has_attached_file :picture,
  #   :storage => :cloudinary
end
