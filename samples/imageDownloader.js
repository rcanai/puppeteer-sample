const puppeteer = require('../modules/puppeteer');

const fs = require('fs');
const path = require('path');

const pageUrl = 'https://www.yahoo.co.jp/';

;(async function run() {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();

  let counter = 0;
  page.on('response', async (response) => {
    const contentType = response._headers['content-type'];
    const isImage = contentType.substr(0, 6) === 'image/';
    if (isImage) {
      const url = response.url();
      const fileName = path.basename(url).substr(0, 10);
      const extension = path.extname(url);
      const buffer = await response.buffer();
      fs.writeFileSync(`downloadedImages/image-${counter}-${fileName}${extension}`, buffer, 'base64');
      counter += 1;
    }
  });

  await page.goto(pageUrl);

  await browser.close();
}());