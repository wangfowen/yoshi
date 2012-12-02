class CreateBookings < ActiveRecord::Migration
  def change
    create_table :bookings do |t|
      t.string :link
      t.integer :application_id
      t.integer :post_id
      t.boolean :conducted

      t.timestamps
    end
  end
end