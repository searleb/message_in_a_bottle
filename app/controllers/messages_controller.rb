class MessagesController < ApplicationController
	
	def index
		# @messages = Message.all.sample(15)
		@new_message = Message.new
	end


	def create
		message = Message.create message_params
		redirect_to root_path
	end

	def new
		@message = Message.new
	end

	def show
		@message = Message.find params[:id]
	end

	def destroy
		message = Message.find params[:id]
		message.destroy
	end

	def lookup # WTF doesn't this work with the routes
		@messages = Message.all.sample(15)
		# @messages_json = {"message" => @messages}
		render :json => @messages
	end

end

private
	def message_params
		params.require(:message).permit(:message)
	end