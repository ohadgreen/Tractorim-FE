import { useEffect, useState } from "react"
import Activity from "./Activity"


function Activities() {
  const BASE_URL = "http://localhost:9000/api/"
  
  const [workActivities, setWorkActivities] = useState([])
  const [loading, setLoading] = useState(false)

  const onGoingFilter = {"ongoing": true}

  var payload = new FormData();
  payload.append( "json", JSON.stringify( onGoingFilter ) );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(BASE_URL + "work-activities/getOngoing/true");
        const data = await response.json();
        setWorkActivities(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    const intervalId = setInterval(fetchData, 3000);

    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this effect runs only once on mount

 let activitiesDisplay = workActivities.map(wa => {
   return <Activity key={wa.id} activity={wa} />
 })

  return <div className="App">
  {loading ? (
    <div>Loading...</div>
  ) : (
    <>
      <h1>Ongoing Activities</h1>
      {activitiesDisplay}
    </>
  )}
</div>
}

export default Activities