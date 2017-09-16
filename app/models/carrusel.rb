class Carrusel < ApplicationRecord
  validates_presence_of :name, :image, :role
  # i errased image... put back if cloudinary doesnt work

  # has_attached_file :picture,
  #   styles: { medium: "300x300>", thumb: "100x100>" },
  #   default_url: "/images/:style/missing.png",
  #   path: ':id/:style/:filename',
  #   storage: :cloudinary,
  #   cloudinary_credentials: Rails.root.join("config/cloudinary.yml")
  # validates_attachment_content_type :picture, content_type: /\Aimage\/.*\z/

end
