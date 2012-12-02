class Application < ActiveRecord::Base
  attr_accessible :expert_id, :booked, :post_id
  belongs_to :post
  has_one :booking
  
end
