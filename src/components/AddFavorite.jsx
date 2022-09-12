
export const AddFavorite = (newFavorite) => {
       
    const [favorites, setFavorites] = useState([]);

    const OnAddFavorite = ( newFavorite ) => {

        console.log("entra" + newFavorite);
        
        if( favorites.includes(newFavorite) ) return;
        setFavorites( [ newFavorite, ...favorites ] );

        console.log("sale" + favorites);
    }


  return favorites;
  
}
