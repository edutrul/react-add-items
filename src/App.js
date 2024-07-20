import {useState} from "react";

function ArtistsList({artists}) {

  return (
    <div>
      {artists.map( (artist) => <div key={artist.id}>{artist.name}</div>)}
    </div>
  );
}

function ArtistCreationForm({artists, addArtist}) {

  let [artistName, setArtistName] = useState('');

  const handleChangeArtistName = (e) => setArtistName(e.target.value);

  const handleAddNewArtist = (e) => {
    e.preventDefault();
    console.log(e);
    addArtist(artistName);
    setArtistName('');
  }

  return (
    <form>
      <input type="textfield" name="artistName" onChange={handleChangeArtistName} value={artistName}/>
      <button onClick={handleAddNewArtist}>Add new artist</button>
    </form>
  );
}

export default function App() {
  const [artists, setArtists] = useState([{id: 1, name: 'Axel'}, {id: 2, name:'Ambar'}, {id: 3, name: 'Amy'}]);

  const addArtist = (artistName) => {
    setArtists( (prevArtists) => [...prevArtists, {id: prevArtists.length + 1, name: artistName}] )
  }

  return <>
    <ArtistCreationForm addArtist={addArtist} />
    <ArtistsList artists={artists}/>
  </>
}