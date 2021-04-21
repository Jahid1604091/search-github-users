import React from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.candy';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);


  const ChartComponent = ({data}) =>{
    const chartConfigs = {
      type: 'doughnut2d',
      width: '100%',
      height: '400',
      dataFormat: 'json',
      dataSource: {
        "chart": {
          caption: "Stars per Language",
          decimals:0,
          pieRadius:'45%',
          showPercentValues:0,
          // "subCaption": "In MMbbl = One Million barrels",
          // "xAxisName": "Country",
          // "yAxisName": "Reserves (MMbbl)",
          // "numberSuffix": "K",
          theme: "candy"
        },
        "data": data
      } 
    }

    return <ReactFC {...chartConfigs} />
  }
  export default ChartComponent


