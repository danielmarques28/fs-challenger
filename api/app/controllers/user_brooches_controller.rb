class UserBroochesController < ApplicationController
  before_action :authorized

  # GET /user_brooches
  def index
    user_brooches = UserBrooch.all
    render json: user_brooches
  end

  # POST /user_brooches
  def create
    @user_brooch = UserBrooch.new(user_brooch_params)
    @user_brooch.user_id = current_user.id

    if @user_brooch.save
      render json: @user_brooch, status: :created
    else
      render json: @user_brooch.errors, status: 400
    end
  end

  private
  def user_brooch_params
    params.permit(:name, :user_id, :friend_id, :brooch_id)
  end
end
