FactoryGirl.define do	
	factory :user do |f|
		f.sequence(:email) { |n| "user#{n}@example.com" }
		f.sequence(:encrypted_password) { Faker::Internet.password }
		# f.sequence(:email) { Faker::Internet.email }
		factory :user_with_messages do
			after(:create) do |u|
				FactoryGirl.create_list(:message, Random.rand(10..50), :user => u)
			end
		end
	end

	factory :message do |f|
		f.sequence(:message) { Faker::Lorem.sentence }
	end
end