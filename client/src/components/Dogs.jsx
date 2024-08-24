import { useState, useEffect } from 'react'

const Dogs = () => {
  const [dogs, setDogs] = useState(null)

  useEffect(() => {
    // fetch('http://localhost:3500/api/dogs')
    fetch('http://54.149.127.21:3500/api/dogs')
      .then(res => res.json())
      .then(res => setDogs(res))
  }, [])
  return (
    <div className="p-3">
      {dogs?.map((item, i) => (
        <div key={i} className="text-xl">
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  )
}

export default Dogs
