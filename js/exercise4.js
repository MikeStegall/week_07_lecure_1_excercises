// You are given the following array of objects:

// Each object represents a person with a first and last name. Your job is to print a numbered list of the initials of each person. Use forEach() to iterate over the array.
// The expected output is:

var people = [
  {
    firstName: 'Lucas',
    lastName: 'Xun'
  },
  {
    firstName: 'Michaela',
    lastName: 'Devlin'
  },
  {
    firstName: 'Mose',
    lastName: 'Bodrogi'
  },
  {
    firstName: 'Heidi',
    lastName: 'Funar'
  },
  {
    firstName: 'Bede',
    lastName: 'Abasolo'
  }
]
function initials (person, index) {
  console.log((index + 1) + ') ' + person.firstName[0] + '. ' + person.lastName[0] + '.')
}
people.forEach(initials)
