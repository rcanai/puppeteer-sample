const puppeteer = require('../modules/puppeteer');
const archive = require('../modules/archive');
const utils = require('../modules/utils');
const argv = require('../modules/argv')();

const fs = require('fs');
const path = require('path');

const pageUrl = argv[0] || process.env.IMAGE_DOWNLOADER_URL ||  'https://www.yahoo.co.jp/';

const domainName = pageUrl.split('://')[1].split('/')[0].replace('www.', '');

let directoryName = `./downloadedImages/${domainName}-` + (new Date).getTime();
directoryName = utils.removeStr(directoryName);

fs.mkdirSync(directoryName);

;(async function run() {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();

  let counter = 0;
  page.on('response', async (response) => {
    const contentType = String(response._headers['content-type'] || '');
    const isImage = contentType.substr(0, 6) === 'image/';
    if (isImage) {
      const url = response.url();
      const fileName = utils.removeStr(path.basename(url).substr(0, 10));
      const extension = utils.removeStr(path.extname(url).substr(0, 6));
      const buffer = await response.buffer();
      console.log(contentType, url);
      fs.writeFileSync(`${directoryName}/image-${counter}-${fileName}${extension}`, buffer, 'base64');
      counter += 1;
    }
  });

  await page.goto(pageUrl);
  await page.waitFor(5000);

  await browser.close();

  archive(directoryName)
}());
