import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Pages/Header/Header';
import Sidebar from './Pages/Sidebar/Sidebar';
import StateHooks from './Pages/StateHookPage/StateHook';
import Welcome from './Pages/Welcome/Welcome';
import Community from './Pages/Community/Community';
import Resources from './Pages/Resources/Resources';
import About from './Pages/About/About';
import ErrorPage from './Pages/Error/Error';
import Users from './Pages/Users/Users';
import UserPage from './Pages/Users/UserPage';
import './global.css';
import usersData from './data/users.json';
import carsData from './data/cars.json';

import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
    Outlet
} from 'react-router-dom';
import Cars from './Pages/Cars/Cars';
import CarsPage from './Pages/Cars/CarsPage';

const Root = () => {
    return (
        <div className='container'>
            <Header />
            <Sidebar />
            <Outlet />
        </div>
    );
}

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={ <Root /> } >
            <Route index element ={ <Welcome /> } />
            <Route path='statehooks' element={ <StateHooks /> } />
            <Route path='community' element={ <Community /> } />
            <Route path='resources' element={ <Resources /> } />
            <Route path='about' element={ <About /> } />
            <Route path='users' element={<Users/>} />
            <Route path='users/:userId' loader={loader} element={<UserPage />} errorElement={<ErrorPage/>} />
            <Route path='cars' element={<Cars/>} />
            <Route path='cars/:carsId' loader={loaderCars} element={<CarsPage />} errorElement={<ErrorPage/>} />
            <Route path='*' element={ <ErrorPage /> } />
        </Route> 
    )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);


function loader({ params }){
    const user = usersData.filter(e => e.id === params.userId);
    return user[0];
}

function loaderCars({ params }){
    const car = carsData.filter(e => e.id === params.carsId);
    return car[0];
}
