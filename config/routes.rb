Rails.application.routes.draw do

  root 'home#index'

  devise_for :users, controllers: {
    registrations: 'api/registrations',
    sessions: 'api/sessions'
  }

  namespace :api do
    resources :carrusels
    post 'contact', to: 'contacts#create'
    get 'users/info'
  end

  get '*unmatched_route', to: 'home#index'
end
