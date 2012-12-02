class CreateApplications < ActiveRecord::Migration
  def change
    create_table :applications do |t|
      t.integer :applicant_id
      t.integer :post_id
      t.boolean :booked

      t.timestamps
    end
  end
end