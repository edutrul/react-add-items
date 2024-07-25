import {useState} from "react";

function ArtistsList({artists, deleteArtist, editIsEditableArtist, handleChangeName}) {

  return (
    <div>
      {artists.map(
        (artist) =>
          <div key={artist.id}>
            {!artist.isEditable ?
              (<span>{artist.name}</span>) :
              (
                <input
                  type="text"
                  onChange={(e) => handleChangeName(artist.id, e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' ? editIsEditableArtist(artist.id, false) : {} }
                  name={`artist_edit_name_${artist.id}`}
                  value={artist.name}/>
              )
            }
            <button onClick={() => deleteArtist(artist.id)}> Delete</button>
            <button onClick={() => editIsEditableArtist(artist.id, true)}> Edit</button>
          </div>
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
  const [artists, setArtists] = useState([
    {id: 1, name: 'Axel', isEditable: false},
    {id: 2, name:'Ambar', isEditable: false},
    {id: 3, name: 'Amy', isEditable: false}
  ]);

  const addArtist = (artistName) => {
    setArtists( (prevArtists) => [...prevArtists, {id: prevArtists.length + 1, name: artistName}] )
  }

  const handleChangeName = (artistId, newArtistName) => {
    setArtists( (prevArtists) => prevArtists.map( (artist) => artist.id === artistId ? { ...artist, name: newArtistName } : artist ) )
  }

  const deleteArtist = (artistId) => {
    setArtists( (prevArtists) => prevArtists.filter( (artist) => artist.id !== artistId ) )
  }

  const editIsEditableArtist = (artistId, isEditable = true) => {
    setArtists( (prevArtists) => prevArtists.map( (artist) => artist.id === artistId ? { ...artist, isEditable: isEditable } : artist ) )
  }

  const reverseArtists = () => {
    setArtists( (prevArtists) => [...prevArtists].reverse() );
  }

  return <>
    <Reverse reverseArtists={reverseArtists}/>
    <ArtistCreationForm addArtist={addArtist} />
    <ArtistsList
      artists={artists}
      handleChangeName={handleChangeName}
      deleteArtist={deleteArtist}
      editIsEditableArtist={editIsEditableArtist}
    />
  </>
}