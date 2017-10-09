require 'pry'
class Carrusel < ApplicationRecord
  validates_presence_of :name, :image, :role

  # has_attached_file :picture,
  #   :storage => :cloudinary,
  #   :path => ':id/:style/:filename'
  def self.do_something(the_info)
    Cloudinary::Uploader.upload(the_info[:picture], :public_id => the_info[:name].downcase, :folder => the_info[:role], :width => 864, :crop => :limit)
  end

  def self.delete_me(info)
    testing = info.name.downcase
    testing = testing.gsub(' ', '%20')
    retesting = info.role
    retesting = retesting.gsub('%20', ' ')
    puts 'delete_me'
    puts testing
    puts retesting
    Cloudinary::Uploader.destroy(testing, :folder => retesting)
  end



end
