require 'facebook_ads'

access_token = '<ACCESS_TOKEN>'
pixel_id = '<ADS_PIXEL_ID>'

FacebookAds.configure do |config|
    config.access_token = access_token
end

user_data_0 = FacebookAds::ServerSide::UserData.new(
    emails: ["7b17fb0bd173f625b58636fb796407c22b3d16fc78302d79f0fd30c2fc2fc068"],
    phones: [])
custom_data_0 = FacebookAds::ServerSide::CustomData.new(
    value: 142.52,
    currency: "BRL")
event_0 = FacebookAds::ServerSide::Event.new(
    event_name: "Purchase",
    event_time: 1630188856,
    user_data: user_data_0,
    custom_data: custom_data_0,
    action_source: "email")

request = FacebookAds::ServerSide::EventRequest.new(
    pixel_id: pixel_id,
    events: [event_0])
request.execute