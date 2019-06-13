const puppeteer = require('../modules/puppeteer');

const pageUrl ='https://twitter.com/login';

const username = process.env.TWITTER_USERNAME || ''
const password = process.env.TWITTER_PASSWORD || ''

;(async function run() {
  const browser = await puppeteer.launch()

  const page = await browser.newPage();

  await page.goto(pageUrl);

  await page.type('form input.js-username-field', username);
  await page.type('form input.js-password-field', password);

  await page.click('form button.submit');

  await page.waitForNavigation({timeout: 60000, waitUntil: "domcontentloaded"});

  await page.screenshot({ path: './screenshots/twitter_home.png', fullPage: false });

  await browser.close()
}());
