class GermanGame < ApplicationRecord
  belongs_to :user
  has_many :themes

  validates :user_id, uniqueness: true
  validates :lifes, :inclusion => 0..3 
end
