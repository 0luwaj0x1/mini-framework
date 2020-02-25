import { User } from './models/User';




const user = new User({name: 'Jozzy', age: 33});



user.on('change', () => {console.log('change one')});
user.on('change', () => {console.log('change two')});

user.trigger('change');