// var gaugeChart = AmCharts.makeChart("chartdiv", {
//   "type": "gauge",
//   "theme": "none",
//   "axes": [{
//     "axisAlpha": 0,
//     "tickAlpha": 0,
//     "labelsEnabled": false,
//     "startValue": 0,
//     "endValue": 100,
//     "startAngle": 0,
//     "endAngle": 270,
//     "bands": [{
//       "color": "#eee",
//       "startValue": 0,
//       "endValue": 100,
//       "radius": "100%",
//       "innerRadius": "85%"
//     }, {
//       "color": "#2a2a2a",
//       "startValue": 0,
//       "endValue": 80,
//       "radius": "100%",
//       "innerRadius": "85%",
//       "balloonText": "80%"
//     }, {
//       "color": "#eee",
//       "startValue": 0,
//       "endValue": 100,
//       "radius": "80%",
//       "innerRadius": "65%"
//     }, {
//       "color": "#545454",
//       "startValue": 0,
//       "endValue": 85,
//       "radius": "80%",
//       "innerRadius": "65%",
//       "balloonText": "85%"
//     }, {
//       "color": "#eee",
//       "startValue": 0,
//       "endValue": 100,
//       "radius": "60%",
//       "innerRadius": "45%"
//     }, {
//       "color": "#7e7e7e",
//       "startValue": 0,
//       "endValue": 92,
//       "radius": "60%",
//       "innerRadius": "45%",
//       "balloonText": "92%"
//     }, {
//       "color": "#eee",
//       "startValue": 0,
//       "endValue": 100,
//       "radius": "40%",
//       "innerRadius": "25%"
//     }, {
//       "color": "#a8a8a8",
//       "startValue": 0,
//       "endValue": 90,
//       "radius": "40%",
//       "innerRadius": "25%",
//       "balloonText": "90%"
//     }]
//   }],
//   "allLabels": [{
//     "text": "Project Management",
//     "x": "49%",
//     "y": "5%",
//     "size": 15,
//     "bold": true,
//     "color": "#2a2a2a",
//     "align": "right"
//   }, {
//     "text": "Data Mining",
//     "x": "49%",
//     "y": "15%",
//     "size": 15,
//     "bold": true,
//     "color": "#545454",
//     "align": "right"
//   }, {
//     "text": "Data Warehouse",
//     "x": "49%",
//     "y": "24%",
//     "size": 15,
//     "bold": true,
//     "color": "#7e7e7e",
//     "align": "right"
//   }, {
//     "text": "Mathematics",
//     "x": "49%",
//     "y": "33%",
//     "size": 15,
//     "bold": true,
//     "color": "#a8a8a8",
//     "align": "right"
//   }],
//   "export": {
//     "enabled": false
//   }
// });
//
//
// var chart = AmCharts.makeChart( "chartdiv2", {
//   "type": "radar",
//   "theme": "none",
//   "dataProvider": [ {
//     "quality": "Curiosity",
//     "litres": 100
//   }, {
//     "quality": "Autonomous",
//     "litres": 90
//   }, {
//     "quality": "Motivated",
//     "litres": 100
//   }, {
//     "quality": "Rigorous",
//     "litres": 85
//   }, {
//     "quality": "Organised",
//     "litres": 80
//   }, {
//     "quality": "Leader",
//     "litres": 70
//   } ],
//   "valueAxes": [ {
//     "axisTitleOffset": 20,
//     "minimum": 0,
//     "maximum": 100,
//     "axisAlpha": 0.15
//   } ],
//   "startDuration": 2,
//   "graphs": [ {
//     "bullet": "round",
//     "lineThickness": 2,
//     "valueField": "litres"
//   } ],
//   "categoryField": "quality",
//
// } );

var ctx = document.getElementById("myChart");

var myRadarChart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['Curious','Autonomous' ,'Motivated', 'Rigorous', 'Organised', 'Leader'],
      datasets: [{
          data: [100, 90, 100, 80, 75, 70],
          backgroundColor: "rgba(249, 157, 62,.2)",
          borderColor: "#ff9425"
      }]
    },
    options: {
        legend: {
            display: false
        },
        responsive: false,
        scale: {
            ticks: {
              min: 20
            }
        }
    }
});
