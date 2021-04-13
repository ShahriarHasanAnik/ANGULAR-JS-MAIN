app.controller('MyController', function($scope,$rootScope, $localStorage, $sessionStorage, $window, $http, uiGridConstants) {
$scope.choose=function(_type)
{
var arrayData = [{"ORDER_QTY":926788,"MONTH_NO":"202004","MONTH_NAME":"APR-20"},{"ORDER_QTY":662033,"MONTH_NO":"202005","MONTH_NAME":"MAY-20"},{"ORDER_QTY":486963,"MONTH_NO":"202006","MONTH_NAME":"JUN-20"},{"ORDER_QTY":709666,"MONTH_NO":"202007","MONTH_NAME":"JUL-20"},{"ORDER_QTY":357448,"MONTH_NO":"202008","MONTH_NAME":"AUG-20"},{"ORDER_QTY":493500,"MONTH_NO":"202009","MONTH_NAME":"SEP-20"},{"ORDER_QTY":337399,"MONTH_NO":"202010","MONTH_NAME":"OCT-20"},{"ORDER_QTY":316374,"MONTH_NO":"202011","MONTH_NAME":"NOV-20"},{"ORDER_QTY":222019,"MONTH_NO":"202012","MONTH_NAME":"DEC-20"},{"ORDER_QTY":270010,"MONTH_NO":"202101","MONTH_NAME":"JAN-21"},{"ORDER_QTY":261581,"MONTH_NO":"202102","MONTH_NAME":"FEB-21"},{"ORDER_QTY":754031,"MONTH_NO":"202103","MONTH_NAME":"MAR-21"},{"ORDER_QTY":15000,"MONTH_NO":"202104","MONTH_NAME":"APR-21"}];
     var data1=[];
                    for(let i=0;i<arrayData.length;i++)
                    {
                    var  obj={};
                       obj.name=arrayData[i].MONTH_NAME;
                       obj.y=arrayData[i].ORDER_QTY;
                       data1.push(obj);
                    }
     debugger;
var dataSeries = [{
                     name: 'Runs',
                     colorByPoint: true,
                     data: data1
                   }];
              if(_type == 'bar'){
                show('bar','container',dataSeries);
              }
}
function show(_type,_id,_data)
{
Highcharts.chart(_id, {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: true,
    type: _type
  },
  title: {
    text: 'My Score As a Batsman'
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  accessibility: {
    point: {
      valueSuffix: 'Runs'
    }
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: false
      },
      showInLegend: true
    }
  },
  series:_data
});
}
});