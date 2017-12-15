class Procom < ApplicationRecord
  belongs_to :paso

  def self.order_by_id
    Procom.order('id ASC')
  end
end
