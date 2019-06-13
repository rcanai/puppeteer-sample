const puppeteer = require('./modules/puppeteer');

const pageUrl = 'https://www.google.co.jp/';

;(async function run() {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();

  await page.goto(pageUrl);

  const title = await page.title()
  console.log(title);

  await browser.close();
}());
