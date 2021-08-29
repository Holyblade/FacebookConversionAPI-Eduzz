'use strict';
const bizSdk = require('facebook-nodejs-business-sdk');
const ServerEvent = bizSdk.ServerEvent;
const EventRequest = bizSdk.EventRequest;
const UserData = bizSdk.UserData;
const CustomData = bizSdk.CustomData;
const Content = bizSdk.Content;

const access_token = '<ACCESS_TOKEN>';
const pixel_id = '<ADS_PIXEL_ID>';
const api = bizSdk.FacebookAdsApi.init(access_token);

let current_timestamp = Math.floor(new Date() / 1000);

const userData_0 = (new UserData())
    .setEmails(["7b17fb0bd173f625b58636fb796407c22b3d16fc78302d79f0fd30c2fc2fc068"])
    .setPhones([]);
const customData_0 = (new CustomData())
    .setValue(142.52)
    .setCurrency("BRL");
const serverEvent_0 = (new ServerEvent())
    .setEventName("Purchase")
    .setEventTime(1630188856)
    .setUserData(userData_0)
    .setCustomData(customData_0)
    .setActionSource("email");

const eventsData = [serverEvent_0];
const eventRequest = (new EventRequest(access_token, pixel_id))
    .setEvents(eventsData);
eventRequest.execute();