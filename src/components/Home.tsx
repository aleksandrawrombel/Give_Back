import React from 'react';

import HomeHeader from './HomeHeader';
import HomeThreeColumns from './HomeThreeColumns';
import HomeSimpleSteps from './HomeSimpleSteps';
import HomeAboutUs from './HomeAboutUs';
import HomeWhoWeHelp from './HomeWhoWeHelp';

const Home = () => {
    return (
        <>
        <HomeHeader />
        <HomeThreeColumns />
        <HomeSimpleSteps />
        <HomeAboutUs />
        <HomeWhoWeHelp />
        </>
    )
}

export default Home;