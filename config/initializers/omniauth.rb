Rails.application.config.middleware.use OmniAuth::Builder do
  provider :linkedin, '4gmbqt51mc3t', 'DtKf478p7vPi90jx', :scope => 'r_fullprofile r_emailaddress', :fields => ["id", "email-address", "first-name", "last-name", "headline", "industry", "picture-url", "public-profile-url", "location"]

  #configure do |config|
  #  config.path_prefix = '/auth'
  #end
end