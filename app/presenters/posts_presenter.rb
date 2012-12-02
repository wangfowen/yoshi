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
    #nice date
    #post user's name
    #timestamp
    #user's photo
    @post.attributes.merge('a' => 'b')
  end
end
