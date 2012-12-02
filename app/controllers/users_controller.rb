class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render :json => @user }
    end
  end

  # GET /view_interviews
  # GET /interviews.json
  # def view_interviews
  #   @applications = Applications.find_all_by_user_id(current_user)

  #   respond_to do |format|
  #     format.html # new.html.erb
  #     format.json { render :json => ApplicationsPresenter.from_array(@applications) }
  #   end
  # end
end
