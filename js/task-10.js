import users from './users.js';

const getSortedUniqueSkills = users =>
  users.reduce((allSkills, user) => {
    allSkills.push(...user.skills);

    return allSkills;
  }, [])
    
    .filter((skill, index, allSkills) => allSkills.indexOf(skill) === index)

    .sort();
    

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]