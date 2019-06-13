
const puppeteer = require('puppeteer');

module.exports = {
  getDevice: (deviceName) => {
    // https://github.com/GoogleChrome/puppeteer/blob/master/lib/DeviceDescriptors.js
    return puppeteer.devices[deviceName]
  },
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
