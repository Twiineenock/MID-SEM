import React, { useEffect, useState } from "react";
import '../CSS/gallery.css';


export default function Gallarey(){
    
    // State variable to store the photo URLs
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Set your Pexels API key
    const apiKey = "IiUcPbW7SjqI2DBKlzBQ4el3OjfitzmR5ES1cPB46kfrjYZkLbQ01EE7";

    // Define the API endpoint for searching photos
    const apiUrl = "https://api.pexels.com/v1/search";

    // Define your query parameters
    const query = "nature";
    const perPage = 20;

    // Create a URL with query parameters
    const url = new URL(apiUrl);
    url.searchParams.append("query", query);
    url.searchParams.append("per_page", perPage);

    // Make the GET request to the Pexels API using the Fetch API
    fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': apiKey
      }
    })
      .then(response => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error(`Error: Unable to fetch photos. Status code: ${response.status}`);
        }
      })
      .then(data => {
        // Extract photo URLs and store them in the 'images' state
        const photoUrls = data.photos.map(photo => photo.url);
        setImages(photoUrls);
      })
      .catch(error => {
        console.error(error);
      });
  }, []); // The empty dependency array ensures this effect runs once when the component mounts

    

    const photos = images.map((imageUrl,i) => (
        <div className="pic--container" key={i}>
            <img src={imageUrl} alt="picture" className="image"/>
            {/* <span className="name">{pic.name}</span> */}
        </div>
    ))

    return(
        <div>
            {photos}
        </div>
        
    )
}