import {
  Chart as ChartJS,
  CategoryScale,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(CategoryScale, ArcElement, Tooltip, Legend, Title);

import { useState, useEffect } from "react";
export default function DoughnutChart() {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setchartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: [
        "Engaged, without pay",
        "Did not engage, without pay",
        "Participated, without pay",
      ],
      datasets: [
        {
          label: "Environmental Engagement in Canada",
          data: [16, 80, 4],
          backgroundColor: [
            "rgb(26, 61, 40, 0.8)",
            "rgb(221, 229, 214, 0.8)",
            "rgb(156, 192, 137, 0.8)",
          ],
          borderRadius: 15,
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
          text: "Environmental Engagement in Canada",
        },
        tooltip: {
          bodyFontStyle: {
            borderRadius: 20,
          },
        },
      },
        maintainAspectRatio: false,
        responsive: true,
    });
  }, []);
  return (
    <>
      <div>
        <Doughnut
          data={chartData}
          options={chartOptions}
          style={{ width: "300px", height: "300px" }}
        />
      </div>
    </>
  );
};
