import React, { useEffect, useState } from "react";
import ApexCharts from "apexcharts";
import ReactApexChart from "react-apexcharts";
import { Button } from "../../components/ui/button";
import { useDispatch } from "react-redux";
import { fetchmarketchart } from "../../state/Coin/Action";

const StockChart = ({coin}) => {
  const dispatch = useDispatch();
  const [activeclick, setActiveclick] = useState("1 Day");
  const handleactivelabel = (value) => {
    setActiveclick(value)
  }

  


  const series = [
    {
      data: [
        [1725997452525, 57821.4970604571],
        [1725998967217, 57842.0651207156],
        [1726003732008, 57623.7834710225],
        [1726006892044, 57635.7001959233],
        [1726010926051, 57842.505315405],
        [1726015039646, 57506.0375888799],
        [1726017741308, 57645.7790230768],
        [1726021723657, 57004.5054238896],
        [1726023806533, 56915.6897063726],
        [1726028027950, 56658.9139769017],
        [1726031800606, 56276.9878767537],
        [1726034791146, 56247.9352095647],
        [1726038156575, 56447.1225344463],
        [1726041648207, 56662.7781301837],
        [1726046482115, 56614.2892268853],
        [1726050179231, 56559.514992331],
        [1726052940595, 56645.1860071597],
        [1726056986763, 56821.1865483274],
        [1726060836203, 56964.9133094105],
        [1726063889911, 55901.7406428885],
        [1726067022377, 55973.8859302244],
        [1726071210253, 56918.388109706],
        [1726074897475, 57513.1149722851],
        [1726078754598, 57749.3173909131],
        [1726082627078, 57571.6140955257],
        [1726086298756, 57583.5894297991],
        [1726088890663, 57561.0534311723],
        [1726092347392, 57314.0241079525],
        [1726095867628, 57479.5483629006],
        [1726100719229, 57510.7988303985],
        [1726103118906, 57624.3518919609],
        [1726106531215, 57935.4564689897],
        [1726114162229, 58218.6788057249],
        [1726117980001, 58120.2329067886],
        [1726120823288, 57938.7975496893],
        [1726125316997, 57888.3698563871],
        [1726129145908, 58253.6385647893],
        [1726133077018, 58215.3995189784],
        [1726137234973, 58026.0090787585],
        [1726140752965, 58091.0097265676],
      ],
    },
  ];
  const options = {
    chart: {
      id: "area-datetime",
      type: "area",
       // Ensure the chart takes full height
      
      zoom: {
        autoScaleYaxis: false,
      },
    },
    dataLables: {
      enabled: false,
    },
    xaxis: {
      type: "datetime",
      tickAmount: 6,
    },
    colors: ["#79D7BE"],
    markers: {
      colors: ["#000"],
      strokeColor: "#fff",
      size: 0,
      strokeWidth: 1,
      style: "hollow",
    },
    tooltip: {
      theme: "dark",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.8,
        opacityTo: 0.9,
        stop: [0, 100],
      },
    },
    grid: {
      borderColor: "#47535E",
      strokeDashArray: 4,
      show: true,
    },
  };
  return (
    <div>
      <div className="space-x-3">
        <Button
          onClick={() => {
            handleactivelabel("1 Day");
          }}
          variant={activeclick === "1 Day" ? "destructive" : "outline"}
        >
          1 Day
        </Button>
        <Button
          onClick={() => {
            handleactivelabel("1 Week");
          }}
          variant={activeclick === "1 Week" ? "destructive" : "outline"}
        >
          1 Week
        </Button>
        <Button
          onClick={() => {
            handleactivelabel("1 Month");
          }}
          variant={activeclick === "1 Month" ? "destructive" : "outline"}
        >
          1 Month
        </Button>
      </div>

      <div id="chart-timelines" className="">
        <ReactApexChart options={options} series={series} type="area" />
      </div>
    </div>
  );
};

export default StockChart;
