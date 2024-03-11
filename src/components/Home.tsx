import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import HomeHeader from './HomeHeader';
import HomeThreeColumns from './HomeThreeColumns';

const Home = () => {
    return (
        <>
        <HomeHeader />
        <HomeThreeColumns />
        </>
    )
}

export default Home;