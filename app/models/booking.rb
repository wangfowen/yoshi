class Booking < ActiveRecord::Base
  attr_accessible :post_id, :conducted, :link, :application_id
  belongs_to :application
  after_save :finish_booking
  has_one :evaluation
  
  def finish_booking
    #send email

    application = Application.find(self.application_id)
    application.update_attribute(:booked, true)
  end
  
  def get_interview_link
    "http://localhost:3000/video?post_id=" + self.post_id.to_s
    # get stuff from yev
  end
  
end
