class Paso < ApplicationRecord
  belongs_to :proyecto
  has_many :procoms, dependent: :destroy
  # self.primary_key = "id"

  def self.order_by_id
    Paso.order('id ASC')
  end

  def self.upload_image(the_info)
    Cloudinary::Uploader.upload(the_info[:picture], :public_id => the_info[:image_link].downcase, :width => 864, :crop => :limit)
  end

  def self.delete_me(this_name)
    Cloudinary::Uploader.destroy(this_name)
  end
end
