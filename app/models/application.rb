class Application < ActiveRecord::Base
  attr_accessible :booked, :post_id, :applicant_id
  belongs_to :post
  belongs_to :applicant, class_name: "User"
  has_one :booking
  
end
