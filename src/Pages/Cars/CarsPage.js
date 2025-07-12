import {Link, useLoaderData} from 'react-router-dom';

export default function CarsPage(){
    const car = useLoaderData();
    return (
        <div className="Main user-page">
            <div>
                <Link to="/cars">Back</Link>
            </div>
            <img src={car.img} alt='avatar' />
            <h2>Car: {car.name}</h2>
            <h3>Color: {car.color}</h3>
        </div>
    );
}