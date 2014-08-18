User.destroy_all
Message.destroy_all

FactoryGirl.create_list(:message, 100)