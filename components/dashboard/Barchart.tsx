import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
  } from 'recharts';


  
const Barchart = () => {
  const data = [
    { date: new Date(2023, 0, 1), temp: 15, hum: 60 },
    { date: new Date(2023, 0, 2), temp: 17, hum: 65 },
    { date: new Date(2023, 0, 3), temp: 18, hum: 70 },
    { date: new Date(2023, 0, 4), temp: 16, hum: 75 },
    { date: new Date(2023, 0, 5), temp: 14, hum: 80 }, 
  ];
  
    
    return (
      <ResponsiveContainer width='100%' height={300}>
        <BarChart data={data}>
           <CartesianGrid strokeDasharray='3 3' />
           <XAxis dataKey='date' />
           <YAxis allowDecimals={false} />
           <Tooltip />
           <Bar dataKey='temp' fill='#2cb1bc' barSize={75} />
        </BarChart>
      </ResponsiveContainer>
    );
  };
  
  export default Barchart;