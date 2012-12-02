class PostsPresenter
  def self.from_array(posts)
    posts.collect do |post|
      new(post)
    end
  end

  def initialize(post)
    @post = post
  end

  def as_json(*)
    user = User.find(@post.user_id).name
    created_at = @post.created_at.nil? ? nil : @post.created_at.strftime("%D")
    deadline = @post.deadline.nil? ? nil : @post.deadline.strftime("%D")
    @post.attributes.except("created_at", "deadline").merge("created_at" => created_at, "deadline" => deadline, "user" => user)
  end
end