import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Button } from "../../components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { fetchmarketchart } from "../../state/Coin/Action";

// Register necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const StockChart2 = ({ coinid }) => {
  
  const dispatch = useDispatch();
  const {coin}=useSelector(store=>store)
   const [activeclick, setActiveclick] = useState(1);
   const handleactivelabel = (value) => {
     setActiveclick(value);
   };
  

   useEffect(() => {
     dispatch(fetchmarketchart({coinid,days:activeclick,jwt:localStorage.getItem("jwt")}));
   },[dispatch,coinid,activeclick]);
  
  
  const series = [
    {
      data: coin.marketchart.data
    },
  ];

  // Format the data for the chart
  const labels = series[0].data.map((item) =>
    new Date(item[0]).toLocaleTimeString()
  ); // Convert timestamp to time
  const data = series[0].data.map((item) => item[1]); // Extract stock price

  // Chart data configuration
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Stock Price",
            data: data,
      
        borderColor: "rgba(75, 192, 192, 1)", // Line color
        borderWidth: 1.5, // Line border width
        fill: false, // No fill under the line
        tension: 0.3,
        pointBackgroundColor:'#000',
      },
    ],
  };

  // Chart options configuration
  const options = {
      responsive: true,
      
      
    scales: {
      x: {
        title: {
          display: true,
          text: "Time",
        },
      },
      y: {
        title: {
          display: true,
          text: "Price",
        },
        beginAtZero: false,
      },
    },
    plugins: {
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
  };

  return (
    <div>
      <div>
        <div className="space-x-3">
                <Button
                  onClick={() => {
                    handleactivelabel(1);
                  }}
                  variant={activeclick === 1 ? "destructive" : "outline"}
                >
                  1 Day
                </Button>
                <Button
                  onClick={() => {
                    handleactivelabel(7);
                  }}
                  variant={activeclick === 7 ? "destructive" : "outline"}
                >
                  1 Week
                </Button>
                <Button
                  onClick={() => {
                    handleactivelabel(30);
                  }}
                  variant={activeclick === 30 ? "destructive" : "outline"}
                >
                  1 Month
                </Button>
              </div>
      </div>
      <h2>Stock Line Chart</h2>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default StockChart2;
