class MessagesController < ApplicationController
	
	def index
		@new_message = Message.new
	end


	def create
		message = Message.new message_params
		message.user = current_user
		message.save # add if save 
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

	def sample 
		messages = Message.all.sample(75)
		render :json => messages, :include => :user # {:user => {:only => :nickname}} 
	end

end

private
	def message_params
		params.require(:message).permit(:message)
	end