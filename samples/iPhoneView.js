const puppeteer = require('../modules/puppeteer');

const pageUrl ='https://github.co.jp/';

;(async function run() {
  const iPhone = puppeteer.getDevice('iPhone X')

  const browser = await puppeteer.launch();

  const page = await browser.newPage();

  await page.emulate(iPhone)

  await page.goto(pageUrl);

  await page.screenshot({ path: './screenshots/iphone_view.png', fullPage: false });

  await browser.close();
}());
