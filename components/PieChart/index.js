import {
  Chart as ChartJS,
  CategoryScale,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(CategoryScale, ArcElement, Tooltip, Legend, Title);

import { useState, useEffect } from "react";
export default function PieChart() {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setchartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: [
        "Always used own bags or containers",
        "Often used own bags or containers",
        "Sometimes used own bags or containers",
        "Rarely used own bags or containers",
        "Did not use own bags or containers",
      ],

      datasets: [
        {
          label: "Single-use plastics in Canada",
          data: [51, 33, 12, 4, 3],
          backgroundColor: [
            "rgb(26, 61, 40)",
            "rgb(221, 229, 214)",
            "rgb(156, 192, 137)",
            "rgb(247, 239, 218)",
            "rgb(70, 111, 85)",
          ],
          borderRadius: 10,
        },
      ],
    });

    setchartOptions({
      indexAxis: "y",
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Single-use plastics in Canada",
        },
        tooltip: {
          bodyFontStyle: {
            borderRadius: 10,
          },
        },
      },
      maintainAspectRatio: true,
      responsive: false,
    });
  }, []);
  return (
    <>
      <div>
        <Pie
          data={chartData}
          options={chartOptions}
          style={{ width: "300px", height: "300px" }}
        />
      </div>
    </>
  );
};
