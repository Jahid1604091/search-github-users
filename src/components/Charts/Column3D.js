import React from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);


  const ChartComponent = ({data}) =>{
    const chartConfigs = {
      type: 'column3d',
      width: '100%',
      height: '400',
      dataFormat: 'json',
      dataSource: {
        "chart": {
          caption: "Most Popular",
          yAxisName:'Stars',
          xAxisName:'Repos',
          xAxisNameFontSize:'14px',
          yAxisNameFontSize:'14px'
        },
        "data": data
      } 
    }

    return <ReactFC {...chartConfigs} />
  }
  export default ChartComponent


