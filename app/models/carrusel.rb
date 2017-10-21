require 'pry'
class Carrusel < ApplicationRecord
  validates_presence_of :name, :image, :role

  def self.upload_image(the_info)
    el_nombre = the_info[:image].split(/(http:\/\/res.cloudinary.com\/lucianouribe\/image\/upload\/|.jpg)/)
    nombre = el_nombre[2]
    binding.pry
    Cloudinary::Uploader.upload(the_info[:picture], :public_id => nombre, :width => 864, :crop => :limit)
  end

  def self.delete_me(info)
    first = info.split(/(http:\/\/res.cloudinary.com\/lucianouribe\/image\/upload\/|.jpg)/)
    delete_this_name = first[2]
    Cloudinary::Uploader.destroy(delete_this_name)
  end



end
