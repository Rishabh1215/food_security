import React from 'react';
// import { Chart } from 'react-google-charts';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

export function ChartDiv(props) {
  // const first = props.xvalues[0];
  // const last = props.xvalues[1];
  // let xaxis = [];
  // for (let i = first; i <= last; i = i + 1) {
  //   xaxis.push(i);
  // }

  // let data = [['Year', 'GDP'], props.xvalues, props.yvalues];
  console.log(props.yvalues);
  let chartTitle = props.chartTitle;
  let options = {
    xAxis: {
      categories: props.xvalues,
    },
    series: [{ data: props.yvalues }],
    title: {
      text: chartTitle,
    },
    events: {
      load() {
        setTimeout(this.reflow.bind(this), 0);
      },
    },
    chart: {
      zoomType: 'x,y',
    },
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      allowChartUpdate={true}
      immutable={true}
    />
  );
}
