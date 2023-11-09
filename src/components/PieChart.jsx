import { Chart } from "react-google-charts";

const PieChart = ({ percentage }) => {
  const data = [
    ["Pac Man", "Percentage"],
    ["", percentage],
    ["", 100 - percentage],
  ];

  const options = {
    legend: "none",
    pieSliceText: "none",
    pieStartAngle: 0,
    tooltip: { trigger: "none" },
    slices: {
      0: { color: "#15c344" },
      1: { color: "transparent" },
    },

    backgroundColor: {
      fill: "transparent",
      stroke: "transparent",
      strokeWidth: 0,
    },
    enableInteractivity: false,
    pieSliceBorderColor: "transparent",
    chartArea: {
      left: 0,
      top: 0,
      right: 0,
      width: "253",
      height: "253",
    },
  };

  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"263"}
      height={"263"}
    />
  );
};

export default PieChart;
