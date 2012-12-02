class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :token_authenticatable, :confirmable,
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :omniauthable

  # Setup accessible (or protected) attributes for your model
  attr_accessible :email, :password, :password_confirmation, :remember_me, :provider, :uid,
  					:name, :headline, :industry, :profile_pic_url, :linkedin_url
  # attr_accessible :title, :body

  has_one :evaluation

  def self.find_for_linkedin_oauth(auth, signed_in_resource=nil)
	  user = User.where(:provider => auth.provider, :uid => auth.uid).first
	  puts auth.to_json
	  unless user
	    user = User.create(name:auth.info.name,
	                         provider:auth.provider,
	                         uid:auth.uid,
	                         email:auth.info.email,
	                         password:Devise.friendly_token[0,20],
	                         headline: auth.info.headline,
	                         industry:auth.info.industry,
	                         profile_pic_url:auth.info.image,
	                         linkedin_url: auth.info.urls.public_profile
	                         )
	  end
	  user
	end
end
