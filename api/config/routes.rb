Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  scope(:path => '/api') do
    # Users
    resources :users, only: [:index]
    get '/users/:id/remaining_brooches', to: 'users#remaining_brooches'
    get '/users/:id/all_interactions', to: 'users#all_interactions'

    # UserBrooches
    resources :user_brooches, only: [:index, :create]

    # Brooches
    resources :brooches, only: [:index]
  end
end
