import { User } from './models/User';




const user = new User({ id: 1, name:'Young money', age:0 });

user.events.on('save', () => {
  console.log(user);
})

user.save();