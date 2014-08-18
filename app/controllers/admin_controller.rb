class AdminController < ApplicationController

	def index
		@messages = Message.all
	end

	def lookup
		@messages = Message.all.sample(15)
		@messages_json = {"message" => @messages}
		render :json => @messages_json
	end

end