const PercyScript = require('@percy/script');
const rc = require('rc');

const { env: { STAGE_URL } } = rc('config');

PercyScript.run(async (page, percySnapshot) => {
  await page.goto(STAGE_URL);
  await percySnapshot('homepage');
});
