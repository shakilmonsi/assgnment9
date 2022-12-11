import React from 'react';
import HomePart from '../HomePart/HomePart';
import Quizs from '../Quiz/Quizs';

const Home = () => {
    return (
        <div className='md:w-full'>
            <HomePart></HomePart>
            <Quizs></Quizs>
        </div>
    );
};

export default Home;