import React, { useContext } from 'react';
import { CategoryContext } from '../../Layout/Main';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'


const Statistcs = () => {

    const totalQuizNumber = useContext(CategoryContext);
    return (
        <div className='mt-4'>
            <LineChart width={600} height={500} data={totalQuizNumber}>
                <Line type="monotone" dataKey="total" stroke="#8884d8" strokeWidth={2} />
                <XAxis dataKey="name" />
                <YAxis dataKey={totalQuizNumber.total} />
                <Tooltip />
            </LineChart>

        </div>
    );
};

export default Statistcs;