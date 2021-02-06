class UserBroochesController < ApplicationController
  # GET /user_brooches
  def index
    @user_brooches = UserBrooch.all

    render json: @user_brooches
  end
end
