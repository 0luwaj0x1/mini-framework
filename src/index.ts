import { Collection } from './models/Collection';

const collections = new Collection('http://localhost:3000/users');

collections.on('change', () => {
  console.log(collections)
})

collections.fetch();
