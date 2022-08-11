
import PropTypes  from 'prop-types';
export const GifItem = ({ title, url, id })  => {

return (
     <div className="card">
       
        <h3>{title}</h3>
        <img alt={title} src={url} />
    </div>
 
)}
   
GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}




