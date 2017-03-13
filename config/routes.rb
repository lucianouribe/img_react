Rails.application.routes.draw do
  root 'home#index'

  namespace :api do
    resources :stuff
    resources :slide_images
  end

  get '*unmatched_route', to: 'home#index'
end
