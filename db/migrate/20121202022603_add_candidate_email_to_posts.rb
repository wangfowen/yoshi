class AddCandidateEmailToPosts < ActiveRecord::Migration
  def change
  	add_column :posts, :candidate_email, :string
  end
end
