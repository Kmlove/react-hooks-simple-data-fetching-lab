import { useEffect, useState } from "react"

// create your App component here
function App (){
    const [image, setImage] = useState(null)
    const [loading, isLoading] = useState(true)
    
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data => {
            setImage(data.message)
            isLoading(false)
        })
    }, [])

    if(loading){
        return <p>Loading...</p>
    }

    return(
        <img src={image} alt="A Random Dog"/>
    )

}

export default App