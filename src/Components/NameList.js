import React from 'react'
import Person from './Person'

function NameList() {
const persons=[
    {
        id : 1,
        name: 'Bruce',  
        age : 28,
        skill : 'Typescript'
    },
    {   
        id : 4,
        name: 'Clark',  
        age : 58,
        skill : 'React'
    },
    {   
        id : 8,
        name: 'Diana',  
        age : 38,
        skill : 'Angular'
    }]


const personList = persons.map(person => <Person key={person.id} person={person}/> )

  return (
    <div>{personList}</div>
  )
}

export default NameList