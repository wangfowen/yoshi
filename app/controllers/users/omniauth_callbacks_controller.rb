class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
	def linkedin
		put "Callback"
		render :text => request.env["omniauth.auth"].to_json
		# You need to implement the method below in your model (e.g. app/models/user.rb)
    	@user = User.find_for_linkedin_oauth(request.env["omniauth.auth"], current_user)
    	if @user.persisted?
	      sign_in_and_redirect @user, :event => :authentication #this will throw if @user is not activated
	      set_flash_message(:notice, :success, :kind => "linkedin") if is_navigational_format?
	    else
	    	#create new user here
	      session["devise.linkedin_data"] = request.env["omniauth.auth"]
	      redirect_to new_user_registration_url
    	end
	end

	def passthru
		puts "passthru"
    	render :file => "#{Rails.root}/public/404.html", :status => 404, :layout => false
  	end

  	def failure
  		#puts "Oauth Failed"
  		#render :text => request.env["omniauth.auth"].to_json

  		# You need to implement the method below in your model (e.g. app/models/user.rb)
    	@user = User.find_for_linkedin_oauth(request.env["omniauth.auth"], current_user)
    	if @user.persisted?
	      sign_in_and_redirect @user, :event => :authentication #this will throw if @user is not activated
	      set_flash_message(:notice, :success, :kind => "linkedin") if is_navigational_format?
	    else
	    	#create new user here
	      session["devise.linkedin_data"] = request.env["omniauth.auth"]
	      redirect_to new_user_registration_url
    	end
  		#redirect_to root_path
  	end
end