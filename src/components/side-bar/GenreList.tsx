import useGenres from "../../hooks/useGenres"

function GenreList() {
    const {genre, error, loader} = useGenres()
  return (
    <>  
        {error && (<h1>{error}</h1>)}
        {loader && (<h1>Loading...</h1>)}

        <ul>
            {genre.map((item) => <li>{item.name}</li>)}
        </ul>
    </>
  )
}

export default GenreList