Rails.application.routes.draw do
  devise_for :users, :controllers => { omniauth_callbacks: 'callbacks'}

  resources :messages
  resources :admin
  root :to => 'messages#index'
  get 'ajax/lookup' => 'ajax#lookup'
end


#                   Prefix Verb     URI Pattern                            Controller#Action
#         new_user_session GET      /users/sign_in(.:format)               devise/sessions#new
#             user_session POST     /users/sign_in(.:format)               devise/sessions#create
#     destroy_user_session DELETE   /users/sign_out(.:format)              devise/sessions#destroy
#  user_omniauth_authorize GET|POST /users/auth/:provider(.:format)        callbacks#passthru {:provider=>/twitter/}
#   user_omniauth_callback GET|POST /users/auth/:action/callback(.:format) callbacks#(?-mix:twitter)
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
#              admin_index GET      /admin(.:format)                       admin#index
#                          POST     /admin(.:format)                       admin#create
#                new_admin GET      /admin/new(.:format)                   admin#new
#               edit_admin GET      /admin/:id/edit(.:format)              admin#edit
#                    admin GET      /admin/:id(.:format)                   admin#show
#                          PATCH    /admin/:id(.:format)                   admin#update
#                          PUT      /admin/:id(.:format)                   admin#update
#                          DELETE   /admin/:id(.:format)                   admin#destroy
#                     root GET      /                                      messages#index
#              ajax_lookup GET      /ajax/lookup(.:format)                 ajax#lookup