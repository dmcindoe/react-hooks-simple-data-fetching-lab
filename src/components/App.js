import React, {useEffect, useState} from "react"
const doggyAPI = "https://dog.ceo/api/breeds/image/random"

function App() {
    const[pupPic, setPupPic] = useState(null)
    useEffect(() => {
        fetch(doggyAPI)
          .then((response) => response.json())
          .then((dog) => {
            setPupPic(dog.message)
          })
      }, [])
      if(!pupPic) 
      return <p> Loading...</p> 
             
        return <img src={pupPic} alt="A Random Dog"></img>
    }
    


    
export default App