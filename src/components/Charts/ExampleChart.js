import React from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

//reduce test
// const numbers = [1, 2, 3, 4];
// const votes = ['Yes', 'No', 'Yes', 'No', 'Absent'];

// const result = votes.reduce((acc, val) => {
//   acc[val] ? acc[val]++ : (acc[val] = 1);
//   return acc;
// }, {});

// console.log(result);

// const products = [
//   {
//     name: 'Pen',
//     amount: 5,
//     price: 5,
//   },
//   {
//     name: 'Pencil',
//     amount: 4,
//     price: 4,
//   },
//   {
//     name: 'khata',
//     amount: 3,
//     price: 35,
//   },
// ];

// const totalCost = products.reduce((acc, item) => {
//   return acc + item.amount * item.price;
// }, 0);

// function func(acc,item){
//     return acc + item.amount * item.price
// }

// const sum = numbers.reduce((acc, val) => acc + val, 5);

// const sum = numbers.reduce(func,5)

// function func(acc,val){
//     return acc+val
// }

const ChartComponent = ({ data }) => {
  const chartConfigs = {
    type: 'bar3d',
    width: 400,
    height: 400,
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Countries With Most Oil Reserves [2017-18]',
        subCaption: 'In MMbbl = One Million barrels',
        xAxisName: 'Country',
        yAxisName: 'Reserves (MMbbl)',
        numberSuffix: 'K',
        theme: 'fusion',
      },
      data: data,
    },
  };

  return <ReactFC {...chartConfigs} />;
};
export default ChartComponent;
