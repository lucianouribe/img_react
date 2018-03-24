require 'pry'
class Paso < ApplicationRecord
  belongs_to :proyecto
  has_many :procoms, dependent: :destroy

  # binding.pry
  def self.order_by_id
    Paso.order('id ASC')
  end

  def self.get_last_id
    Paso.maximum(:id)
  end

  def self.upload_image(the_info)
    Cloudinary::Uploader.upload(the_info[:picture], :public_id => the_info[:image_link].downcase, :width => 864, :crop => :limit)
  end

  def self.delete_me(this_name)
    Cloudinary::Uploader.destroy(this_name)
  end
end
