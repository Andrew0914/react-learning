import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {
  const barValues = props.bars.map((bar) => bar.value);
  const maximum = Math.max(...barValues);

  return (
    <div className="chart">
      {props.bars.map((bar) => (
        <ChartBar
          key={bar.label}
          value={bar.value}
          max={maximum}
          label={bar.label}
        />
      ))}
    </div>
  );
}

export default Chart;
