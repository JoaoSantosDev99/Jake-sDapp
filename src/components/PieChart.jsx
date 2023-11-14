import { Chart } from "react-google-charts";

const PieChart = ({ percentage }) => {
  const val = percentage >= 0 ? percentage : 100;

  const data = [
    ["Pac Man", "Percentage"],
    ["", val],
    ["", 100 - val],
  ];

  const color1 =
    percentage >= 75
      ? "#15c344"
      : percentage >= 50
      ? "#c3a615"
      : percentage >= 0
      ? "#c31515"
      : "#adadad";

  const options = {
    legend: "none",
    pieSliceText: "none",
    pieStartAngle: 0,
    tooltip: { trigger: "none" },
    slices: {
      0: { color: color1 },
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
