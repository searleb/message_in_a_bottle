require 'rails_helper'

RSpec.describe MessagesController, :type => :controller do
  
  let(:valid_attributes) {
    "wtf"
  }

   let(:valid_session) { {} }

	describe "GET index" do
		before(:each) {Message.create(message: "wtf?")}
		it "assigns all messages to @messages" do
			expect(@messages).to change by(1)
			# expect(assigns(@messages)).to eq(Message.all) 
		end
	end

	describe "POST create" do
		it "creates a new message" do
			expect {
          post :create, {:message => valid_attributes}, valid_session
        }.to change(Message, :count).by(1)
		end
	end
end