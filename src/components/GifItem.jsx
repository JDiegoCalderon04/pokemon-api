import PropTypes from 'prop-types';

export const GifItem = ({ name, img_url, id }) => {


  return (
   
   <div className="card">
        <img src={ img_url } alt={ name } /> 
        <p>{ name }</p>
    </div>
  )
}

GifItem.propTypes = {
  name: PropTypes.string.isRequired,
  img_url: PropTypes.string.isRequired,

}
