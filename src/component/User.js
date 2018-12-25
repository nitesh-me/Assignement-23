import React from 'react'

export default function User() {
  let users =[
    {"name":"Swarna","age":23},
    {"name":"Mohan","age":24 },
    {"name":"Mukund", "age":32},
    {"name":"sandy", "age":20}

  ]

  return (
    <div>
     <p>Name :{users[0].name}, Age :{users[0].age}</p>
     <p>Name :{users[1].name}, Age :{users[1].age}</p>
     <p>Name :{users[2].name}, Age :{users[2].age}</p>
     <p>Name :{users[3].name}, Age :{users[3].age}</p>
    </div>
  )
}
