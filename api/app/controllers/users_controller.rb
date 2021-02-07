class UsersController < ApplicationController
  before_action :authorized, except: [:create, :login]
  before_action :set_user, only: [:show]

  def login
    @user = User.find_by(email: params[:email])

    if !@user.nil? && @user.authenticate(params[:password])
      token = encode_token({ user_id: @user.id })
      render json: { token: token }
    else
      render json: { error: 'Invalid email or password' }
    end
  end

  # POST /users
  def create
    @user = User.new(user_params)

    if @user.save
      render json: @user, status: :created
    else
      render json: @user.errors, status: 400
    end
  end

  # GET /users/:id
  def show
    user = @user.as_json(except: :password_digest)
    user[:avatar] = url_for(@user.avatar) if @user.avatar.attached?
    render json: user
  end

  def all_users_except_current_user
    users = User.where.not(id: @user.id)
    users_json = users.as_json(except: :password_digest)
    users_json.each_with_index { |user, i|
      user[:avatar] = url_for(users[i].avatar) if users[i].avatar.attached?
    }
    render json: users_json
  end

  def remaining_brooches
    brooches = Brooch.all
    hash = {}
    for brooch in brooches do
      hash[brooch.name] = brooch.max_amount_per_user
    end

    for user_brooch in current_user.user_brooches do
      hash[user_brooch.brooch.name] -= 1
    end

    render json: hash
  end

  def all_interactions
    render json: current_user.user_brooches,
    except: :brooch_id,
    include: { brooch: { only: [:id, :name] } }
  end

  private
    def set_user
      begin
        @user = User.find(params[:id])
      rescue ActiveRecord::RecordNotFound
        render json: {error: 'User not found'}, status: :not_found
      end
    end

    def user_params
      params.permit(:name, :email, :password, :avatar)
    end
end
