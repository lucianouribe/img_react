class GermanGame < ApplicationRecord
  belongs_to :user

  validates :user_id, uniqueness: true
  validates :lifes, :inclusion => 0..3 
end
