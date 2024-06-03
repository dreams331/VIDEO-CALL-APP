const twilio = require('twilio');
const AccessToken = twilio.jwt.AccessToken;
const VideoGrant = AccessToken.VideoGrant;

exports.handler = async function(event, context) {
  const { identity } = JSON.parse(event.body);

  const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID;
  const twilioApiKey = process.env.TWILIO_API_KEY;
  const twilioApiSecret = process.env.TWILIO_API_SECRET;

  const token = new AccessToken(twilioAccountSid, twilioApiKey, twilioApiSecret);
  token.identity = identity;

  const videoGrant = new VideoGrant();
  token.addGrant(videoGrant);

  return {
    statusCode: 200,
    body: JSON.stringify({ token: token.toJwt() })
  };
};
