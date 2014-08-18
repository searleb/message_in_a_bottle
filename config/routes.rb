Rails.application.routes.draw do
  devise_for :users
  resources :messages
  resources :admin
  root :to => 'messages#index'
  get 'ajax/lookup' => 'ajax#lookup'
end


#                   Prefix Verb     URI Pattern                            Controller#Action
#         new_user_session GET      /users/sign_in(.:format)               devise/sessions#new
#             user_session POST     /users/sign_in(.:format)               devise/sessions#create
#     destroy_user_session DELETE   /users/sign_out(.:format)              devise/sessions#destroy
#  user_omniauth_authorize GET|POST /users/auth/:provider(.:format)        devise/omniauth_callbacks#passthru {:provider=>/twitter/}
#   user_omniauth_callback GET|POST /users/auth/:action/callback(.:format) devise/omniauth_callbacks#(?-mix:twitter)
#            user_password POST     /users/password(.:format)              devise/passwords#create
#        new_user_password GET      /users/password/new(.:format)          devise/passwords#new
#       edit_user_password GET      /users/password/edit(.:format)         devise/passwords#edit
#                          PATCH    /users/password(.:format)              devise/passwords#update
#                          PUT      /users/password(.:format)              devise/passwords#update
# cancel_user_registration GET      /users/cancel(.:format)                devise/registrations#cancel
#        user_registration POST     /users(.:format)                       devise/registrations#create
#    new_user_registration GET      /users/sign_up(.:format)               devise/registrations#new
#   edit_user_registration GET      /users/edit(.:format)                  devise/registrations#edit
#                          PATCH    /users(.:format)                       devise/registrations#update
#                          PUT      /users(.:format)                       devise/registrations#update
#                          DELETE   /users(.:format)                       devise/registrations#destroy
#                 messages GET      /messages(.:format)                    messages#index
#                          POST     /messages(.:format)                    messages#create
#              new_message GET      /messages/new(.:format)                messages#new
#             edit_message GET      /messages/:id/edit(.:format)           messages#edit
#                  message GET      /messages/:id(.:format)                messages#show
#                          PATCH    /messages/:id(.:format)                messages#update
#                          PUT      /messages/:id(.:format)                messages#update
#                          DELETE   /messages/:id(.:format)                messages#destroy
#                     root GET      /                                      messages#index