import {Link} from 'react-router-dom';

export default function Cars(){
    return (
        <div className="Main">
            <h1>CARS</h1>
            <ul>
                <li><Link to='/cars/toyota-corolla'>Toyota</Link></li>
                <li><Link to='/cars/honda-civic'>Honda</Link></li>
                <li><Link to='/cars/ford-f150'>Ford</Link></li>
                <li><Link to='/cars/tesla-model-3'>Tesla</Link></li>
                <li><Link to='/cars/bmw-x5'>BMW</Link></li>
            </ul>
        </div>
    );
}