import users from './users.js';

const getUsersWithGender = (users, gender) => {
  const userNameByGender = [];
  // console.log(users.filter(user => user.gender === gender));
  users.filter(user => user.gender === gender).map(user => userNameByGender.push(user.name));

  return userNameByGender;
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]