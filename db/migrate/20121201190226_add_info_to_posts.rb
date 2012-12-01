class AddInfoToPosts < ActiveRecord::Migration
  def change
  	add_column :posts, :user_id, :integer
  	add_column :posts, :title, :string
  	add_column :posts, :category, :integer
  	add_column :posts, :description, :text
  	add_column :posts, :candidate_name, :string
  	add_column :posts, :deadline , :datetime
  end
end
