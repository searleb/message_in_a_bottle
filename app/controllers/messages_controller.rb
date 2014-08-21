class MessagesController < ApplicationController
	
	def index
		@new_message = Message.new
	end

	def create
		message = Message.new message_params
		message.message = ActionController::Base.helpers.sanitize(message.message)
		message.user = current_user
		
		if message.save 
			flash[:success] = "Your message has been cast out to the digital sea!"
			redirect_to root_path
		else
			flash[:error]
			puts "Oh no, something went wrong. Please try again."
		end
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
		messages = Message.all.sample(150)
		render :json => messages, :include => :user # {:user => {:only => :nickname}} 
	end

end

private
	def message_params
		params.require(:message).permit(:message)
	end