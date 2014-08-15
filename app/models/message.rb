# == Schema Information
#
# Table name: messages
#
#  id         :integer          not null, primary key
#  message    :text
#  user_id    :string(255)
#  created_at :datetime
#  updated_at :datetime
#

class Message < ActiveRecord::Base
	belongs_to :user
end
