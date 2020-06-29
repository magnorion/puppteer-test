const puppeteer = require('puppeteer');
const url = 'http://www.thwpads.com';

module.exports = async (timer) => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.setUserAgent('Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Mobile Safari/537.36');

    await page.goto(url);
    await page.waitFor(timer);

    await browser.close();
}
