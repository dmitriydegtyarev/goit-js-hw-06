import users from './users.js';

const getUsersWithEyeColor = (users, color) => {
  console.log(users.filter(user => user.eyeColor === color));
};

getUsersWithEyeColor(users, 'blue'); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]