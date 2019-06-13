const puppeteer = require('../modules/puppeteer');

const pageUrl ='https://github.co.jp/';

;(async function run() {
  const browser = await puppeteer.launch()

  const page = await browser.newPage();

  await page.goto(pageUrl);

  const res = await page.evaluate(() => {
    return {
      htmlText1: document.querySelector('h1.alt-h0').innerHTML,
      htmlText2: document.querySelector('p.alt-lead').innerHTML
    }
  });

  console.log(res);

  await browser.close()
}());
