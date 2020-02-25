import { User } from './models/User';




const user = new User({name: 'Boy', age: 20});

user.events.on('change', () => {
  console.log('something shele');
})

user.events.trigger('change');