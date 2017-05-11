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
    post 'translator', to: 'translators#translate'
    get 'translator', to: 'translators#translated'
    post 'morse', to: 'morses#go_to_model'
    get 'morse', to: 'morses#comes_from_model'
  end

  get '*unmatched_route', to: 'home#index'
end
