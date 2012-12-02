class Post < ActiveRecord::Base
  attr_accessible :title, :category, :description, :candidate_name, :deadline, :user_id, :candidate_email

  has_one :evaluation
end
