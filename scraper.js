const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const urls = [
    'https://sanand0.github.io/tdsdata/js_table/?seed=42',
    'https://sanand0.github.io/tdsdata/js_table/?seed=43',
    'https://sanand0.github.io/tdsdata/js_table/?seed=44',
    'https://sanand0.github.io/tdsdata/js_table/?seed=45',
    'https://sanand0.github.io/tdsdata/js_table/?seed=46',
    'https://sanand0.github.io/tdsdata/js_table/?seed=47',
    'https://sanand0.github.io/tdsdata/js_table/?seed=48',
    'https://sanand0.github.io/tdsdata/js_table/?seed=49',
    'https://sanand0.github.io/tdsdata/js_table/?seed=50',
    'https://sanand0.github.io/tdsdata/js_table/?seed=51',
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

