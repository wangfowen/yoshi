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
    user = User.find(@post.user_id)
    created_at = @post.created_at.nil? ? nil : @post.created_at.strftime("%D")
    deadline = @post.deadline.nil? ? nil : @post.deadline.strftime("%D")
    
    applications = Application.find_all_by_post_id(@post.id)
    application_status = applications.select { |application| !application.booked? }

    if application_status.empty?
      application_status = false
    else
      application_status = application_status.first.applicant_id
    end

    num_applicants = applications.count
    
    @post.attributes.except("created_at", "deadline").merge("created_at" => created_at, 
      "deadline" => deadline, "user" => user.name, "user_id" => user.id, 
      "profile_pic_url" => user.profile_pic_url, "application_status" => application_status,
      "num_applicants" => num_applicants)
  end
end
