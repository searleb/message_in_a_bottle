class AjaxController < ApplicationController

	def lookup
		messages = Message.all.sample(25)
		
		messages_id = messages.each do |m|
			m.id
		end

		user_nickname = messages.each do |m|
			m.user.nickname
		end

		messages_json = {"message" => messages_id, "nickname" => user_nickname}
		render :json => messages_json
	end

end