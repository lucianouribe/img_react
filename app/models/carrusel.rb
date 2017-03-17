class Carrusel < ApplicationRecord
  has_attached_file :picture, styles: { medium: "300x300>", thumb: "100x100>" },
    default_url: "/images/:style/missing.png",
    storage: :cloudinary
  validates_attachment_content_type :picture, content_type: /\Aimage\/.*\z/
  validates_presence_of :name, :image, :role
end
