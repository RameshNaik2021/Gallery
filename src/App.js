
import React, { useState } from 'react';
import './App.css';
import axios from 'axios'
import Gallery from './Gallery';

const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
function App() {
  const [data, setdata] = useState([]);
  const [search, setSearch] = useState("");
 
  

  const handlechanger = e => {
    setSearch(e.target.value)
  }
  const submithandler = e => {
    e.preventDefault()
    setSearch("")

  
  axios
  .get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`)
  .then(res=>{setdata(res.data.photos.photo)})
}
  return (
    <center>
      <h2>gallery</h2>
      <form onSubmit={submithandler}>
        <input type="text" value={search} onChange={handlechanger} /> <br /> <br />
        <input type="submit" />
      </form>
      <br />
      <br />
      {data.length>=1?<Gallery data={data}/>:<h2>no data found</h2>}
      
     
    </center>

  );
}

export default App;
