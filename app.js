const puppeteer = require('puppeteer');

const NUMERO_VEZES = 10; // Numero de vezes que o app vai rodar!!!
const url = 'http://www.thwpads.com';
const timer = (Math.floor(Math.random() * (10 - 3) + 3) * 1000);

async function accessPage() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    
    // await page.setRequestInterception(true);
    await page.setUserAgent('Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Mobile Safari/537.36');
    
    await page.goto(url);
    await page.waitFor(timer);

    await browser.close();
}

for (let i = 0; i < NUMERO_VEZES; i++) {
    setTimeout(() => {
        (async () => accessPage())();
    }, (timer * i));
}
