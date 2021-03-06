class Topic < ApplicationRecord
  belongs_to :proyecto, optional: true
  has_many :subtopic
  has_attached_file :image, :styles => { :medium => "300x300>", :thumb => "100x100>" }, :default_url => "/images/:style/missing.png"
  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/

  def topic_url
    image.url(:thumb)
  end
end
