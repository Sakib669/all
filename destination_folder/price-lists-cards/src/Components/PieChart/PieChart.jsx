import React from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';


const PieCharts = () => {

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


      const marks2 = [
        {
          id: 1,
          name: 'Alice',
          English: 80,
          History: 75,
          Economics: 90
        },
        {
          id: 2,
          name: 'Bob',
          English: 75,
          History: 85,
          Economics: 80
        },
        {
          id: 3,
          name: 'Charlie',
          English: 90,
          History: 80,
          Economics: 70
        },
        {
          id: 4,
          name: 'David',
          English: 85,
          History: 70,
          Economics: 75
        },
        {
          id: 5,
          name: 'Ella',
          English: 70,
          History: 90,
          Economics: 80
        },
        {
          id: 6,
          name: 'Frank',
          English: 75,
          History: 80,
          Economics: 85
        },
        {
          id: 7,
          name: 'Grace',
          English: 80,
          History: 75,
          Economics: 90
        },
        {
          id: 8,
          name: 'Harry',
          English: 90,
          History: 85,
          Economics: 80
        },
        {
          id: 9,
          name: 'Isabella',
          English: 85,
          History: 90,
          Economics: 70
        },
        {
          id: 10,
          name: 'Jacob',
          English: 75,
          History: 70,
          Economics: 75
        }
      ];
      
      

    return (
        <div>
            <PieChart
            width={500}
            height={500}>

                <Pie data={marks} dataKey="Physics" stroke='cyan' fill='lightsalmon' cx="50%" cy="50%" innerRadius={70} outerRadius={90}></Pie>

            </PieChart>
            <PieChart
            width={500}
            height={500}>

                <Pie data={marks} dataKey="Chemistry" stroke='yellow' fill='peru' cx="50%" cy="50%" innerRadius={70} outerRadius={90}></Pie>

            </PieChart>
            <PieChart
            width={500}
            height={500}>
                <Pie data={marks} dataKey="Math" fill='red' stroke='black' cx="50%" cy="50%" innerRadius={70} outerRadius={90}></Pie>

            </PieChart>
        </div>
    );
};

export default PieCharts;