$(function() {
        
    Highcharts.setOptions({
        colors: Highcharts.map(Highcharts.getOptions().colors, function (color) {
            return {
                radialGradient: {
                    cx: 0.5,
                    cy: 0.3,
                    r: 0.7
                },
                stops: [
                    [0, color],
                    [1, Highcharts.color(color).brighten(-0.3).get('rgb')] // darken
                ]
            };
        })
    });

    
    // Create the chart
    Highcharts.chart('container', {
        chart: {
            type: 'pie'
        },
        title: {
            text: ''
        },
        tooltip: {
            valueSuffix: ''
        },
        subtitle: {
            text:
            ''
        },
        plotOptions: {
            series: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: [{
                    enabled: true,
                    distance: 20
                }, {
                    enabled: false,
                    distance: -20,
                    format: '{point:.1f}',
                    style: {
                        fontSize: '.9em',
                        textOutline: 'none',
                        opacity: 0.7
                    },
                    filter: {
                        operator: '.1f',
                        property: 'SUM',
                        value: '10'
                    }
                }]
            }
        },
        series: [
            {
                name: 'SUM/TOTAL',
                colorByPoint: true,
                data: [
                    {
                        name: 'absence ',
                        y: 10
                    },
                    {
                        name: 'Attend',
                        y: 70
                    },
                    {
                        name: 'Vacation',
                        y: 12
                    }
                ],
                size: '50%',
                innerSize: '50%',
                showInLegend: true,
                dataLabels: {
                    enabled: true
                }
            }
        ]
    });
    


    ////////////////////////////////////


            $('#container2').highcharts({
            chart: {
                type: 'column',
                backgroundColor: '#fff'
            },
            title: {
                text: '',
                style: {  
                color: '#000'
                }
            },
            xAxis: {
                tickWidth: 0,
                labels: {
                style: {
                color: '#000',
                }
                },
                categories: [
                'Jun', 
                'Feb', 
                'Mar'
                
                ]
            },
            yAxis: {
                gridLineWidth: .5,
                gridLineDashStyle: 'dash',
                gridLineColor: 'black',
                title: {
                text: '',
                style: {
                color: '#000'
                }
                },
                labels: {
                formatter: function() {
                    return Highcharts.numberFormat(this.value, 0, '', ',');
                },
                style: {
                    color: '#000',
                }
                }
            },
            legend: {
                enabled: false,
            },
            credits: {
                enabled: false
            },
            tooltip: {
                valuePrefix: ''
            },
            plotOptions: {
                column: {
                borderRadius: 0,
                pointPadding: 0,
                groupPadding: 0.05
                } 
            },
            series: [{
                name: 'Absent',
                data: [
                10, 
                9, 
                13
                
                ],
                color: '#6f8ed3'
            }]
            });
        
    ////////////////////////////////////////////

    
      
    Highcharts.chart('container3', {
        chart: {
            type: 'pie'
        },
        title: {
            text: ''
        },
        tooltip: {
            valueSuffix: ''
        },
        subtitle: {
            text:
            ''
        },
        plotOptions: {
            series: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: [{
                    enabled: true,
                    distance: 20
                }, {
                    enabled: false,
                    distance: -20,
                    format: '{point:.1f}',
                    style: {
                        fontSize: '.9em',
                        textOutline: 'none',
                        opacity: 0.7
                    },
                    filter: {
                        operator: '.1f',
                        property: 'SUM',
                        value: '10'
                    }
                }]
            }
        },
        series: [
            {
                name: 'SUM/TOTAL',
                colorByPoint: true,
                data: [
                    {
                        name: 'absence ',
                        y: 20,
                        color: "#900"
                    },
                    {
                        name: 'Attend',
                        y: 90,
                        color: "green"
                    },
                    {
                        name: 'Vacation',
                        y: 12,
                        color: "yellow"
                    }
                ],
                size: '80%',
                innerSize: '80%',
                showInLegend: true,
                dataLabels: {
                    enabled: true
                }
            }
        ]
    });
      

    ///////////////////////////////////

    Highcharts.chart('container4', {
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: ['Jun', 'Feb', 'Mar']
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            column: {
                borderRadius: '25%'
            }
        },
        series: [{
            name: 'In',
            data: [10000, 12000, 4000]
        }, {
            name: 'Out',
            data: [-5000, -5000, -1000],
        }]
    });
    
    
    });

    