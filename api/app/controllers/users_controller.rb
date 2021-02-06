class UsersController < ApplicationController
  before_action :set_user, only: [:show, :remaining_brooches, :all_interactions]

  # GET /users
  def index
    users = User.all
    users_json = users.as_json(except: :password_digest)
    users_json.each_with_index { |user, i|
      user[:avatar] = url_for(users[i].avatar) if users[i].avatar.attached?
    }
    render json: users_json
  end

  # GET /users/:id
  def show
    user = @user.as_json(except: :password_digest)
    user[:avatar] = url_for(@user.avatar)
    render json: user
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
    render json: @user.user_brooches,
    except: :brooch_id,
    include: { brooch: { only: [:id, :name] } }
  end

  private
    def set_user
      begin
        @user = User.find(params[:id])
      rescue ActiveRecord::RecordNotFound
        render json: {msg: 'User not found'}, status: :not_found
      end
    end

    def user_params
      params.require(:user).permit(:name, :email, :password, :avatar)
    end
end
