class Post < ActiveRecord::Base
  attr_accessible :title, :category, :description, :candidate_name, :deadline
end
