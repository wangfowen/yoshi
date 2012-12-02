class Application < ActiveRecord::Base
  attr_accessible :expert_id, :booked, :post_id
  belongs_to :post
  belongs_to :applicant, class_name: "User"
  has_one :booking
  
end
