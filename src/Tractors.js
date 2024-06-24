import { useEffect, useState } from "react"

function Tractors() {
  const BASE_URL = "http://localhost:9000/api/"
  
  const [tractors, setTractors] = useState([])
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    setLoading(true)
    fetch(BASE_URL + "tractors/all")
      .then(response => response.json())
      .then(json => setTractors(json))
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return <div className="App">
  {loading ? (
    <div>Loading...</div>
  ) : (
    <>
      <h1>Tractors</h1>
      <table border={1}>
        <tr>
          <th>Tractor</th>
          <th>year</th>
          <th>HP</th>
        </tr>
        {tractors.map(t => (
          <tr key={t.id}>
            <td>{t.brand} {t.model}</td>
            <td>{t.year}</td>
            <td>{t.horsePower}</td>
          </tr>
        ))}
      </table>
    </>
  )}
</div>
}

export default Tractors