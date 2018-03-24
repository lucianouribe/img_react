Rails.application.routes.draw do

  root 'home#index'

  devise_for :users, controllers: {
    registrations: 'api/registrations',
    sessions: 'api/sessions'
  }

  namespace :api do
    resources :carrusels
    resources :descripcions
    resources :proyectos do
      resources :pasos, except: [:set_last_id]
    end
    resources :pasos, except: [:set_last_id] do
      resources :procoms
    end
    resources :pasos, only: [:set_last_id] do
      get 'pasos_id', to: 'pasos#set_last_id'
    end

    get 'set_last_id', to: 'pasos#set_last_id'

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
