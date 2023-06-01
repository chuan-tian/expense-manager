import ChartBar from './ChartBar';
import './Chart.css';

function Chart(props) {
  const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const maxExpense = Math.max(...dataPointsValues);

  return (
    <div className='chart'>
      {props.dataPoints.map(dataPoint => <ChartBar
        key={dataPoint.label}
        value={dataPoint.value}
        maxValue={maxExpense}
        label={dataPoint.label}
      />)}
    </div>
  )
}

export default Chart;
