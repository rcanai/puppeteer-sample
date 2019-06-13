
const puppeteer = require('puppeteer');

module.exports = {
  launch: async () => {
    return await puppeteer.launch({
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--lang=ja'
      ],
    });
  }
}
