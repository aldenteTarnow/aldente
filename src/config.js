const googleMapApiKey = process.env.GOOGLE_MAP_API_KEY;
const facebookApi = {
    appId: process.env.FACEBOOK_APP_ID || 146692202789787,
    appSecret: process.env.FACEBOOK_APP_SECRET || '1371a7f97f7172c761fed81de438d853',
    appToken: process.env.FACEBOOK_APP_TOKEN || '146692202789787|DNoUGEJjbCO8LNlE2uU1VSfzVDo',
};

export {
    googleMapApiKey,
    facebookApi
};
