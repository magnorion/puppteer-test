const puppeteer = require('puppeteer');

const url = 'http://www.thwpads.com';
async function accessPage(index) {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(url);
    await page.waitFor(10000);

    await browser.close();
}

for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        (async () => accessPage(i))();
    }, (10000 * i));
}
