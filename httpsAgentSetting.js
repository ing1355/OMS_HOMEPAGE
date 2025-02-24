const HTTPS = require("https");
const fs = require("fs");

export const httpsAgent = new HTTPS.Agent({
    rejectUnauthorized: false,
    // key: fs.readFileSync("/home/oms/oms_web_page/newKey.pem"),
    // cert: fs.readFileSync("/home/oms/oms_web_page/cert.pem"),
})