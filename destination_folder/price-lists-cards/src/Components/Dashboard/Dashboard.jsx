import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Dashboard = () => {

    const marks = [
        {
          id: 1,
          name: 'John',
          Physics: 85,
          Chemistry: 70,
          Math: 92
        },
        {
          id: 2,
          name: 'Sarah',
          Physics: 90,
          Chemistry: 82,
          Math: 88
        },
        {
          id: 3,
          name: 'Mike',
          Physics: 78,
          Chemistry: 86,
          Math: 90
        },
        {
          id: 4,
          name: 'Emily',
          Physics: 92,
          Chemistry: 80,
          Math: 87
        },
        {
          id: 5,
          name: 'David',
          Physics: 84,
          Chemistry: 88,
          Math: 76
        },
        {
          id: 6,
          name: 'Jessica',
          Physics: 79,
          Chemistry: 93,
          Math: 81
        },
        {
          id: 7,
          name: 'Andrew',
          Physics: 87,
          Chemistry: 91,
          Math: 85
        },
        {
          id: 8,
          name: 'Olivia',
          Physics: 89,
          Chemistry: 83,
          Math: 94
        },
        {
          id: 9,
          name: 'Jacob',
          Physics: 77,
          Chemistry: 90,
          Math: 85
        },
        {
          id: 10,
          name: 'Emma',
          Physics: 91,
          Chemistry: 76,
          Math: 88
        }
      ];
      

    return (
        <div>
            <LineChart
            width={1000}
            height={500}
            data={marks}>

                <Line type="monotone" dataKey='Physics' stroke="#8884d8"></Line>
                <Line type="monotone" dataKey='Math' stroke="#82ca9d"></Line>
                <Line type="monotone" dataKey='Chemistry'></Line>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>

            </LineChart>
        </div>
    );
};

export default Dashboard;