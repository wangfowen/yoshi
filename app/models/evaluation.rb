class Evaluation < ActiveRecord::Base
	attr_accessible :rating, :comments, :recommended
	attr_accessor :completed, :read
	belongs_to :post
	belongs_to :evaluator, class_name: "User"

	state_machine :state, :initial => :incomplete do
		state :incomplete do
			def complete?
				false
			end
		end

		state :complete, :unread_evaluion, :read_evaluion do
			def complete?
				true
			end
		end

		state :incomplete, :complete, :unread_evaluion do
			def read?
				false
			end
		end

		state :read_evaluation do
			def read?
				true
			end
		end

		event :evaluate do
			transition :incomplete => :complete
		end

		event :review do
			transition :unread => :read
		end

		after_transition :on => :evaluate do |evaluation, transition|
			evaluation.completed = true
			evaluation.save
		end
		after_transition :on => :review do |evaluation, transition|
			evaluation.read = true
		end
	end

	def evaluate
		self[:completed] = true
	end

	def review
		self[:read] = true
	end

end
