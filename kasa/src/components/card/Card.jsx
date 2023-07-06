import { Link } from 'react-router-dom';
import './card.scss';

function Card ({id, title, cover}){
    return (
        // <Link to={`/accomodation/${id}`}>
            <div className="card_gallery">
                <img src={cover} alt={title} />
                <h3>{title}</h3>
            </div>
        </Link>
    );
    
}