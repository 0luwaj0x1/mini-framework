import { User } from './models/User';


const collections = User.buildUserCollection();

collections.on('change', () => {
  console.log(collections)
})

collections.fetch();
