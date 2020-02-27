import { User } from './models/User';




const user = User.buildUser({name:'sweet', age:23 });

user.save();