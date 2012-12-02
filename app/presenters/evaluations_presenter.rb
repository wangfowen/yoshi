class EvaluationsPresenter
  def self.from_array(evaluations)
    evaluations.collect do |evaluation|
      new(evaluation)
    end
  end

  def initialize(evaluation)
    @evaluation = evaluation
  end

  def as_json(*)
    user = User.find(@evaluation.evaluator_id)
    created_at = @evaluation.created_at.nil? ? nil : @evaluation.created_at.strftime("%D")
    
    post = Post.find_by_id(@evaluation.post_id)
    
    @evaluation.attributes.except("created_at").merge("created_at" => created_at, "user" => user.name, "user_id" => user.id, 
      "profile_pic_url" => user.profile_pic_url, "title" => post.title)
  end
end
