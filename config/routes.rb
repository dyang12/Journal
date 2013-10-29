Journal::Application.routes.draw do
  resources :posts
  root :to => "static_pages#root"
end
