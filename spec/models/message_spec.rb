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

require 'rails_helper'

RSpec.describe Message, :type => :model do
  it { is_expected.to belong_to(:user)}
end
