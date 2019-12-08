class GermanGame < ApplicationRecord
  belongs_to :user
  has_many :subthemes

  validates :user_id, uniqueness: true
end
