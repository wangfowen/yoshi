class Booking < ActiveRecord::Base
  attr_accessible :post_id, :conducted, :link, :application_id
  belongs_to :application
  after_save :finish_booking
  
  def finish_booking
    #send email

    application = Application.find(self.application_id)
    application.update_attribute(:booked, true)
  end
  
  def get_interview_link
    "http://google.com"
    # get stuff from yev
  end
  
end
