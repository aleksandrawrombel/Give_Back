import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import HomeHeader from './HomeHeader';
import HomeThreeColumns from './HomeThreeColumns';
import HomeSimpleSteps from './HomeSimpleSteps';

const Home = () => {
    return (
        <>
        <HomeHeader />
        <HomeThreeColumns />
        <HomeSimpleSteps />
        </>
    )
}

export default Home;