const axios = require("axios");
const fs = require("fs");
const prettier = require("prettier");
const https = require("https");

const getDate = new Date().toISOString();
const DOMAIN = "https://omsecurity.kr//";

const formatted = (sitemap) => prettier.format(sitemap, { parser: "html" });
(async () => {
  const httpsAgent = new https.Agent({ rejectUnauthorized: false });
  axios
    .get("https://omsecurity.kr/oms/api/boards?lang=ko", { httpsAgent })
    .then((kopost) => {
      axios
        .get("https://omsecurity.kr/oms/api/boards?lang=en", { httpsAgent })
        .then((enpost) => {
          const postList = [];
          const postListen = [];
          kopost.data.forEach((post) => postList.push({ ...post }));
          enpost.data.forEach((post) => postListen.push({ ...post }));
          const postListSitemap = `
        ${postList
          .map((post) => {
            return `
            <url>
                <loc>${`${DOMAIN}/NewsView/${post.id}`}</loc>
                <lastmod>${getDate}</lastmod>
            </url>`;
          })
          .join("")}
        `;
          const postListSitemapen = `
        ${postListen
          .map((post) => {
            return `
            <url>
                <loc>${`${DOMAIN}/en/NewsView/${post.id}`}</loc>
                <lastmod>${getDate}</lastmod>
            </url>`;
          })
          .join("")}
        `;
          const generatedSitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
          <urlset
        xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
      >
        ${postListSitemap + postListSitemapen}
      </urlset>
        `;
          const formattedSitemap = formatted(generatedSitemap);
          fs.writeFileSync(
            "../public/sitemap/sitemap-posts.xml",
            formattedSitemap,
            "utf8"
          );
        });
    });
})();
