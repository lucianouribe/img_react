class Subtheme < ApplicationRecord
  belongs_to :german_game
  has_attached_file :image, :styles => { :medium => "300x300>", :thumb => "100x100>" }, :default_url => "/images/:style/missing.png"
  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/

  def avatar_url
    image.url(:medium)
  end

  def self.order_by_id
    Subtheme.order('id ASC')
  end
end
