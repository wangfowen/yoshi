class AddFieldsToUser < ActiveRecord::Migration
  def change
  	add_column :users, :name, :string
  	add_column :users, :industry, :string
  	add_column :users, :headline, :string
  	add_column :users, :profile_pic_url, :string
  	add_column :users, :linkedin_url, :string
  end
end
