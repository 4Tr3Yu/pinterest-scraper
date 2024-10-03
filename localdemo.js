import { chromium } from "playwright";

const scraperService = async (url) => {
	const browser = await chromium.launch({ headless: true });
	const context = await browser.newContext();
	const page = await context.newPage();
	try {
		await page.goto(url, { waitUntil: "load" });
		await page.waitForSelector('div[data-test-id="image-box"]');
		const img = await page.$('div[data-test-id="image-box"] img');
		const src = await img.getAttribute("src");
		console.log("src: ", src);
	} catch (error) {
		console.log("Error: ", error);
	}
};

scraperService("https://cl.pinterest.com/4tr3yumon/pins/");
