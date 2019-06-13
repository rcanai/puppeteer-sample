const puppeteer = require('./modules/puppeteer');

;(async function run() {
  const browser = await puppeteer.launch()

  const page = await browser.newPage();

  await page.goto('https://www.google.co.jp/');

  const title = await page.title()
  console.log(title);

  await browser.close()
}());
