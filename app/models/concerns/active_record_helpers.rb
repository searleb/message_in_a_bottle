  module ActiveRecordHelpers

    def self.included(base)
      base.extend ClassMethods
    end

    module ClassMethods
      def find_for_oauth(auth)
        record = where(provider: auth.provider, uid: auth.uid.to_s).first
        record || create(provider: auth.provider, nickname: auth.info.nickname, uid: auth.uid, email: "#{auth.info.nickname}@spoof.com", password: Devise.friendly_token[0,20])
      end
    end
  end