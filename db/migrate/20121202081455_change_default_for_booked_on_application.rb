class ChangeDefaultForBookedOnApplication < ActiveRecord::Migration
  def change
  	change_column_default(:applications, :booked, false)
  	change_column_default(:bookings, :conducted, false)
  end
end
