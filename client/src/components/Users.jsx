import { useState, useEffect } from 'react'

const Users = () => {
  const [users, setUsers] = useState(null)

  useEffect(() => {
    // fetch('http://localhost:3500/api/users')
    fetch('http://54.149.127.21:3500/api/users')
      .then(res => res.json())
      .then(res => setUsers(res))
    console.log('This is the users', users)
  }, [])
  return (
    <div className="p-3">
      {users?.map((item, i) => (
        <div key={i} className="text-xl">
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  )
}

export default Users
