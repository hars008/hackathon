import {useContext} from 'react';
import FavoritesContext from '../../store/favorites-context';
import WishlistContext from '../../store/wishlist-context';
function Card(props){
  const favortiectx=useContext(FavoritesContext);
  const wishiectx=useContext(WishlistContext);
  function toggleFavoriteStatusHandler() {
    if (favortiectx.itemIsFavorite(props.id)) {
      favortiectx.removeFavorite(props.id);
    } else {
      favortiectx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.img
      });
    }
  }
  function toggleWishlistStatusHandler() {
    // console.log("Hello");
    if (wishiectx.itemIsFavorite(props.id)) {
      wishiectx.removeFavorite(props.id);
    } else {
      wishiectx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.img
      });
      console.log("Hello");
    }
  }  return(
      <div className="col-lg-4 col-md-6 col-sm-12 item">
        <div className="card item" style={{width: '25rem'}}>
        <img className="card-img-top" src={props.img} alt="Card image cap"/>
        <div className="card-body">
          <h4 className="card-title" style={{fontWeight:'bold'}}>{props.title}</h4>
          <p className="card-text">{props.description}</p>
          <div className="row">
          <button onClick={toggleFavoriteStatusHandler} className="btn btn-primary col-lg-5 " id="demo" style={{backgroundColor: '#1e009d',paddingLeft:'2.5%'}}>{!favortiectx.itemIsFavorite(props.id)? "Add to cart":"Remove from Cart"}</button>&nbsp;&nbsp;
          <button onClick={toggleWishlistStatusHandler} className="btn btn-primary col-lg-6" style={{backgroundColor: '#1e009d'}}>{!wishiectx.itemIsFavorite(props.id)? "Add to wishlist":"Remove from wishlist"}</button>
       </div> </div>
      </div>
      </div>
    )
}
export default Card;