class ApplicationsPresenter
  def self.from_array(applications)
    applications.collect do |application|
      new(application)
    end
  end

  def initialize(application)
    @application = application
  end

  def as_json(*)
    @post = Post.find(@application.post_id)
    eval_completed = Evaluation.find_by_post_id(@post.id).completed

    @application.attributes.merge({"title" => @post.title, "created_at" => @post.created_at.nil? ? nil : @post.created_at.strftime("%D"),
      "name" => User.find(@post.user_id).name, "category" => @post.category, "description" => @post.description,
      "candidate_name" => @post.candidate_name, "deadline" => @post.deadline.nil? ? nil : @post.deadline.strftime("%D"),
      "eval_completed" => eval_completed
      })
  end
end