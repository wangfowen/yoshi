class Application < ActiveRecord::Base
  attr_accessible :booked, :post_id, :applicant_id
  belongs_to :post
  has_one :booking
  
end
