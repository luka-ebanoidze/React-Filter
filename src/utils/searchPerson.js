export function searchPerson(person, searchTerm) {
   if(person.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
      return true
   } else if(person.city.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
      return true
   } else if (person.age.toString().includes(searchTerm.toString())){
      return true
   } else return false
}
