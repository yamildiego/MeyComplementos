import React from 'react';
import HomeLayout from '../components/HomeLayout/HomeLayout';
import MenuLeft from './MenuLeft';
import Articles from './Articles';
import data from './../../../src/api.json';

function Home(props) {
    return (
        < HomeLayout menuLeft={<MenuLeft categories={data.categories} />} main={<Articles articles={data.articles} />} />
    )
}

export default Home;