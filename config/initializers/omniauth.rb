Rails.application.config.middleware.use OmniAuth::Builder do
  provider :linked_in, 'CONSUMER_KEY', 'CONSUMER_SECRET'
end