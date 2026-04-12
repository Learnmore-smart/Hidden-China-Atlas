const https = require('https');

const url = "https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=langmusi%20tibetan%20monastery&image_size=landscape_16_9";

const check = () => {
  https.get(url, (res) => {
    console.log("Status:", res.statusCode);
    console.log("Location:", res.headers.location);
  });
};

check();
