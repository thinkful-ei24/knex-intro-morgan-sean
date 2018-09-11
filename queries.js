'use strict';

const { DATABASE } = require('./config');
const knex = require('knex')(DATABASE);

// clear the console (just a convenience)
process.stdout.write('\x1Bc');

// Sample select 
// knex
//   .select()
//   .from('restaurants')
//   .limit(2)
//   .debug(true)
//   .then(results => console.log(results));

// knex.select().from('restaurants')
//   .then(results => console.log(results));

// knex
//   .select()
//   .from('restaurants')
//   .where('cuisine', 'Italian')
//   .then(results => console.log(results));

// knex
//   .select('id', 'name')
//   .from('restaurants')
//   .limit(10)
//   .then(results => console.log(results));

// knex
//   .count()
//   .from('restaurants')
//   .where('cuisine', 'Thai')
//   .then(count => console.log(count));

// Count of all restaurants
// knex('restaurants')
//   .count()
//   .then(console.log);

// Count of Thai restaurants in 11372
// knex('restaurants')
//   .count()
//   .where({
//     address_zipcode: '11372',
//     cuisine: 'Thai'
//   })
//   .then(res => console.log(res));

// Italian restaurants in multiple zipcodes
// knex('restaurants')
//   .select('id', 'name')
//   .whereIn('address_zipcode', ['10012', '10013', '10014'])
//   .orderBy('name')
//   .limit(5)
//   .then(console.log);

// 8. Create a restaurant
// knex('restaurants')
//   .insert({
//     name: 'Byte Cafe',
//     borough: 'Brooklyn',
//     cuisine: 'coffee',
//     address_building_number: '123',
//     address_street: 'Atlantic Avenue',
//     address_zipcode: '11231'
//   });

// 9. Create a restaurant and return id and name
// knex('restaurants')
//   .returning(['id', 'name'])
//   .insert({
//     name: 'Boot Cafe',
//     borough: 'Brooklyn',
//     cuisine: 'oil',
//     address_building_number: '123',
//     address_street: 'Atlantic Avenue',
//     address_zipcode: '11231'
//   })
//   .then((results) => console.log(results));

// 10. Create three restaurants and return id and name
// knex('restaurants')
//   .insert([
//     {
//       name: 'Books Cafe',
//       borough: 'Manhattan',
//       cuisine: 'coffee',
//       address_building_number: '123',
//       address_street: 'Wall Street',
//       address_zipcode: '11231'
//     },
//     {
//       name: 'Boot Diner',
//       borough: 'Brooklyn',
//       cuisine: 'American',
//       address_building_number: '123',
//       address_street: 'Atlanta Avenue',
//       address_zipcode: '11231'
//     },
//     {
//       name: 'Stuff',
//       borough: 'Queens',
//       cuisine: 'Thai',
//       address_building_number: '123',
//       address_street: 'Atlantic Avenue',
//       address_zipcode: '11231'
//     }  
//   ])
//   .returning(['id', 'name'])
//   .then(console.log);

  // 11. Update a record
knex('restaurants')
  .update('name', 'DJ Reynolds Pub and Restaurant')
  .where('nyc_restaurant_id', '30191841')
  .returning(['id', 'name'])
  .then(console.log);