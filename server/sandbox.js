/* eslint-disable no-console, no-process-exit */
const michelin = require('./michelin');
const restaurant = michelin.get();

restaurant.forEach(restaurant => {
  console.log(restaurant.name);
})

async function sandbox (searchLink = 'https://guide.michelin.com/fr/fr/centre-val-de-loire/veuves/restaurant/l-auberge-de-la-croix-blanche') {
  try {
    console.log(`🕵️‍♀️  browsing ${searchLink} source`);

    const restaurant = await michelin.scrapeRestaurant(searchLink);

    console.log(restaurant);
    console.log('done');
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

const [,, searchLink] = process.argv;

sandbox(searchLink);
