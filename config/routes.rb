Rails.application.routes.draw do

  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  root 'home#index'

  devise_for :users, controllers: {
    registrations: 'api/registrations',
    sessions: 'api/sessions'
  }

  namespace :api do
    resources :german_games, path: 'deutsch'
    resources :themes
    resources :subthemes

    resources :carrusels
    resources :descripcions
    resources :books
    
    resources :proyectos, except: [:desktop_create] do
      resources :pasos, except: [:set_last_id]
    end

    resources :tutorials
    resources :steps
    get 'topics', to: 'tutorials#topics'

    get 'subthemes', to: 'subthemes#index'
    get 'game', to: 'subthemes#game'
    put 'reset', to: 'german_games#reset'

    get 'set_last_id', to: 'pasos#set_last_id'
    get 'set_last_procom_id', to: 'procoms#set_last_procom_id'

    post 'contact', to: 'contacts#create'
    get 'users/info'
    post 'translator', to: 'translators#translate'
    get 'translator', to: 'translators#translated'
    post 'morse', to: 'morses#go_to_model'
    get 'morse', to: 'morses#comes_from_model'
    post 'equilibrio', to: 'equilibrios#go_to_model'
    get 'equilibrio', to: 'equilibrios#comes_from_model'
  end

  get '*unmatched_route', to: 'home#index'

end
