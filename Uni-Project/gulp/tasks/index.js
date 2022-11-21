window.onload = function () { 
    
	const Emptylabels = [' ',' ',' ',' ',' ',' ',' '];
	 var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        
        if (this.readyState == 4 && this.status == 200) {
            data_chart1 = JSON.parse(this.responseText).data_charts1.map((item) => parseInt(item, 10));
            data_chart2 = JSON.parse(this.responseText).data_charts2.map((item) => parseInt(item, 10));
            data_chart3 = JSON.parse(this.responseText).data_charts3.map((item) => parseInt(item, 10));
            const labels = ['Jan','Feb','Mar','Apr','May','Jun'];
            const data_3 = {
            labels: labels,
            datasets: [{
            backgroundColor: '#72caa7',
            borderColor: '#72caa7',
            data: data_chart1,
            tension: 0.4,
            pointRadius: 0,
            fill: true
                
        },{
				backgroundColor: '#ffd775',
				borderColor: '#ffd775',
				data: data_chart2,
                tension: 0.4,
                  pointRadius: 0,
                 fill: true
			},{
				backgroundColor: '#72d7d1',
                borderColor: '#72d7d1',
                pointRadius: 0,
				 data: data_chart3,
                 tension: 0.4,
                 fill: true
			}]
    };
    const config_3 = {
        type: 'line',
        fillOpacity: .3,
        responsive: true,
        data: data_3,
        options: {
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false
                    }
                }],
                yAxes: [{
                    gridLines: {
                        display: false
                    }
                }],
                y: {
                    max: 800,
                    min: 100,
                    grace: '5%',
				}, x: {
    						
							  }
            },
            

        },
             
    };
	
    const myChart_3 = new Chart(
        document.getElementById('myChart_3'),
        config_3
    )
         }
    }
    request.open("GET", "data.json", true);
	request.send();
    const data = {
        labels: Emptylabels,
        datasets: [{
            backgroundColor: 'white',
            borderColor: 'white',
            data: [3, 20, 20, 30, 40, 20,48],     
        }]
    }
     const config = {
        type: 'line',
        fillOpacity: .3,
        responsive: true,
        data: data,
        options: {
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false
                    }
                }],
                yAxes: [{
                    gridLines: {
                        display: false
                    }
                }],
                y: {
                    max: 50,
                    min: 0,
                    grace: '5%',
				}, x: {
    						display: false
							  }
            },
            

        },
             
    };
     const myChart = new Chart(
        document.getElementById('myChart'),
        config
    )

        const Data_Graph = {
        labels: Emptylabels,
        datasets: [{
            backgroundColor: 'white',
            borderColor: 'white',
            data: [10, 50,15, 70, 50, 5,60],     
        }]
    }
     const Graph_config = {
        type: 'line',
        fillOpacity: .3,
        responsive: true,
        data: Data_Graph,
        options: {
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false
                    }
                }],
                yAxes: [{
                    gridLines: {
                        display: false
                    }
                }],
                y: {
                    max: 150,
                    min: 0,
                    display: false,
                    grace: '5%',
                    ticks:{
                            display:false
                            }
				}, x: {
    						display: false
							  }
            },
            

        },
             
    };
     const myGraph = new Chart(
        document.getElementById('myGraph'),
        Graph_config
    )

           const Data_Bar = {
        labels: Emptylabels,
        datasets: [{
            backgroundColor: '#9972b5',
            borderColor: '#9972b5',
            data: [100, 70,80, 50, 40, 130,80],     
        }]
    }
     const Bar_config = {
        type: 'bar',
       
        responsive: true,
        data: Data_Bar,
        options: {
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false
                    }
                }],
                yAxes: [{
                    gridLines: {
                        display: false
                    }
                }],
                y: {
                    max: 150,
                    min: 0,
                    display: false,
                    grace: '5%',
                    ticks:{
                            display:false
                            }
				}, x: {
    						display: false
							  }
            },
            

        },
             
    };
     const myBar = new Chart(
        document.getElementById('myBar'),
        Bar_config
    )


    
}