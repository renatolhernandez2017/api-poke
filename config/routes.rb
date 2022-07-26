Rails.application.routes.draw do
  root 'home#index'

  get 'pokemon/:name', to: 'home#pokemon', as: :pokemon
end
