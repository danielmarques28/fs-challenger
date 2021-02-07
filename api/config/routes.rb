Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  scope(:path => '/api') do

    # Users
    resources :users, only: [:create]
    post '/users/login', to: 'users#login'
    get '/users/show_current_user', to: 'users#show_current_user'
    get '/users/index_except_current_user', to: 'users#index_except_current_user'
    get '/users/remaining_brooches', to: 'users#remaining_brooches'
    get '/users/all_interactions', to: 'users#all_interactions'

    # UserBrooches
    resources :user_brooches, only: [:create, :index]

    # Brooches
    resources :brooches, only: [:index]
  end
end
