require 'pry'
class Carrusel < ApplicationRecord
  validates_presence_of :name, :image, :role

  # has_attached_file :picture,
  #   :storage => :cloudinary,
  #   :path => ':id/:style/:filename'
  def self.do_something(the_info)
    # one_param = { picture: the_info[:picture] }
    # the_name = the_info[:name]
    # puts one_param[:picture]
    # puts one_param[:name]
    # folder puede ser el infopic
    Cloudinary::Uploader.upload(the_info[:picture], :public_id => the_info[:name], :upload_preset => 'imagenes', :folder => 'fotos')
  end

end
