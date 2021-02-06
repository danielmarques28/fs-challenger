Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  scope(:path => '/api') do
    # Users
    get '/users', to: 'users#index'
    get '/users/:id/remaining_brooches', to: 'users#remaining_brooches'
    get '/users/:id/all_interactions', to: 'users#all_interactions'

    # UserBrooches
    get '/user_brooches', to: 'user_brooches#index'

    # Brooches
    get '/brooches', to: 'brooches#index'
  end
end
