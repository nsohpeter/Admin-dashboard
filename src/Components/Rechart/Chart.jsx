import React from 'react';
import './Chart.css';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {name: 'January', amt: 4000},
  { name: 'Febuary', amt: 3000},
  {name: 'March', amt: 2000},
  {name: 'April', amt: 2780},
  {name: 'May', amt: 1890},
  {name: 'June', amt: 2390},
 ];

const Chart = () => {

  return (
      <div className="chart">
        <ResponsiveContainer width="100%" height="100%" >
        <AreaChart
          width={200}
          height={100}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="amt" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
      </div>
    );
}

export default Chart;