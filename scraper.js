const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const urls = [
    'https://example.com/page1',
    'https://example.com/page2',
    'https://example.com/page3'
  ];

  let total = 0;

  for (const url of urls) {
    await page.goto(url);
    const numberText = await page.textContent('#number'); // Change this selector
    const num = parseFloat(numberText.replace(/[^\d.]/g, ''));
    total += num;
  }

  console.log(`🔢 Total sum: ${total}`);

  await browser.close();
})();

