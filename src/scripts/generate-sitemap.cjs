// scripts/generate-sitemap.js
const { SitemapStream, streamToPromise } = require("sitemap");
const fs = require("fs");

// Create a stream to write the sitemap
const sitemapStream = new SitemapStream({
  hostname: "https://yourdomain.com", // Replace with your Vercel domain
});

// Add URLs to the sitemap
sitemapStream.write({ url: "/", changefreq: "daily", priority: 1 });
// Add more pages as necessary
sitemapStream.end();

// Convert the stream to a promise and write to file
streamToPromise(sitemapStream)
  .then((data) => {
    fs.writeFileSync("./public/sitemap.xml", data.toString());
    console.log("Sitemap generated successfully!");
  })
  .catch((err) => {
    console.error("Error generating sitemap:", err);
  });
