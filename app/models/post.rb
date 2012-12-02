class Post < ActiveRecord::Base
  attr_accessible :title, :category, :description, :candidate_name, :deadline, :user_id, :candidate_email

  has_one :evaluation
  has_one :booking

  belongs_to :user

  def self.unfilled(current_user)
  	Post.select {|p| Application.find_by_post_id(p.id).nil? && p.user_id != current_user.try(:id) }
  end
end
