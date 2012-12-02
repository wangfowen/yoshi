class SampleController < ApplicationController
    def action
        api_key = "21886882"        # Replace with your OpenTok API key.
        api_secret = "2_MX4yMTg4Njg4Mn4xMjcuMC4wLjF-U2F0IERlYyAwMSAyMDowODo0MSBQU1QgMjAxMn4wLjgzNjAxMzczfg"  # Replace with your OpenTok API secret.

        opentok = OpenTok::OpenTokSDK.new api_key, api_secret
        session = opentok.create_session request.remote_addr

        token = opentok.generate_token :session_id => session, :role => OpenTok::RoleConstants::PUBLISHER, :connection_data => "username=Bob,level=4"
    end
end