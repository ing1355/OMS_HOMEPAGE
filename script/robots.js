const fs = require("fs");

const generatedSitemap = `
User-agent: *
Allow: /
Disallow: /login
Disallow: /Newstext
Sitemap:https://omsecurity.kr/sitemap.xml
`;

fs.writeFileSync("../public/robots.txt", generatedSitemap, "utf8");
