import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const Analysis = () => {
    const marks = [
        {name: 'Assignment-1', value: 60},
        {name: 'Assignment-2', value: 58},
        {name: 'Assignment-3', value: 58},
        {name: 'Assignment-4', value: 52},
        {name: 'Assignment-5', value: 60},
        {name: 'Assignment-6', value: 60},
        {name: 'Assignment-7', value: 59},
        {name: 'Assignment-8', value: 60},
    ]

    return (
        <div>
            
            <div className='section-title mt-10 mb-28 py-10'>
                <h3 className='mt-4 text-center  font-bold text-5xl'>Assignment Marks</h3>
            </div>
            
        <PieChart className='mx-auto' width={400} height={400}>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={marks}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
        </PieChart>
        </div>
    );
};

export default Analysis;