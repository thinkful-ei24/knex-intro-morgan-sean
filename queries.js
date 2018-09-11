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

knex.select().from('restaurants')
  .then(results => console.log(results));

knex
  .select()
  .from('restaurants')
  .where('cuisine', 'Italian')
  .then(results => console.log(results));

knex
  .select('id', 'name')
  .from('restaurants')
  .limit(10)
  .then(results => console.log(results));

knex
  .count()
  .from('restaurants')
  .where('cuisine', 'Thai')
  .then(count => console.log(count));

  