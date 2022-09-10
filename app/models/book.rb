class Book < ApplicationRecord
  validates :title, presence: true
  def self.order_by_id
    Book.order('id DESC')
  end
end
