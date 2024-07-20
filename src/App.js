import {useState} from "react";

function ArtistsList({artists, deleteArtist}) {

  return (
    <div>
      {artists.map(
        (artist) =>
          <>
            <div key={artist.id}>{artist.name}</div>
            <button onClick={() => deleteArtist(artist.id)}> Delete</button>
          </>
      )}
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

function Reverse({reverseArtists}) {
  return <button onClick={reverseArtists}>Reverse Artists</button>
}

export default function App() {
  const [artists, setArtists] = useState([{id: 1, name: 'Axel'}, {id: 2, name:'Ambar'}, {id: 3, name: 'Amy'}]);

  const addArtist = (artistName) => {
    setArtists( (prevArtists) => [...prevArtists, {id: prevArtists.length + 1, name: artistName}] )
  }

  const deleteArtist = (artistId) => {
    setArtists( (prevArtists) => prevArtists.filter( (artist) => artist.id !== artistId ) )
  }

  const reverseArtists = () => {
    setArtists( (prevArtists) => [...prevArtists].reverse() );
  }

  return <>
    <Reverse reverseArtists={reverseArtists}/>
    <ArtistCreationForm addArtist={addArtist} />
    <ArtistsList
      artists={artists}
      deleteArtist={deleteArtist}
    />
  </>
}