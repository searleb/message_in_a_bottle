class AjaxController < ApplicationController

	def lookup
		messages = Message.all.sample(20)
		messages = messages.each do |m|
			m.id
		end
		messages_json = {"message" => messages}

		render :json => messages_json
	end

end