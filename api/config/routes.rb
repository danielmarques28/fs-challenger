Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  scope(:path => '/api') do
    # Users
    resources :users, only: [:create, :show]
    post '/users/login', to: 'users#login'
    get '/users/all_users_except_current_user', to: 'users#all_users_except_current_user'
    get '/users/:id/remaining_brooches', to: 'users#remaining_brooches'
    get '/users/:id/all_interactions', to: 'users#all_interactions'

    # UserBrooches
    resources :user_brooches, only: [:create, :index]

    # Brooches
    resources :brooches, only: [:index]
  end
end
