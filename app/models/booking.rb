class Booking < ActiveRecord::Base
  attr_accessible :post_id, :conducted, :link
  belongs_to :application
  belongs_to :expert, class_name: "User"
  
  def initializer
    @conducted = false
    @link = get_interview_link
  end
  
  def get_interview_link
    # get stuff from yev
  end
  
end
