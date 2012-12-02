class Evaluation < ActiveRecord::Base
	attr_accessible :post_id, :rating, :comments, :recommended, :evaluator_id, :completed

	belongs_to :post
	belongs_to :evaluator, class_name: "User"

	before_save do |evaluation|
		evaluation.post.booking.update_attribute(:conducted, true)
	end
end
