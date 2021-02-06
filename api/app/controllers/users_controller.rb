class UsersController < ApplicationController
  before_action :set_user, only: [:remaining_brooches, :all_interactions]

  # GET /users
  def index
    @users = User.all
    render json: @users
  end

  def remaining_brooches
    brooches = Brooch.all
    hash = {}
    for brooch in brooches do
      hash[brooch.name] = brooch.max_amount_per_user
    end

    for user_brooch in @user.user_brooches do
      hash[user_brooch.brooch.name] -= 1
    end

    render json: hash
  end

  def all_interactions
    render json: @user.user_brooches
  end

  private
    def set_user
      begin
        @user = User.find(params[:id])
      rescue ActiveRecord::RecordNotFound
        render json: {msg: 'not found'}, status: 404
      end
    end

    def user_params
      params.require(:user).permit(:name, :email)
    end
end
