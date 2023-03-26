import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

export function ChartDiv2(props) {
  let chartTitle = props.chartTitle;
  let options = {
    xAxis: {
      categories: props.xvalues,
    },
    yAxis: [{
      title: {
        text: "Tonnes"
      }
    },  {
      title: {
        text: "ha"
      },
      opposite: true
    }],
    series: [
      {
        name: props.name1,
        yAxis: 0,
        data: props.yvalues1
      },
      {
        name: props.name2,
        yAxis: 1,
        data: props.yvalues2
      }
    ],
    title: {
      text: chartTitle,
    },
    events: {
      load() {
        setTimeout(this.reflow.bind(this), 0);
      },
    },
    chart: {
      zoomType: "x,y",
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
