class SlideImage < ApplicationRecord
  validates_presence_of :name, :image, :role
end
