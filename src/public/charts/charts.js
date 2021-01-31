var totalOperatingTimeConfig1 = {
	type: 'doughnut',
	data: {
		datasets: [{
			data: [7,4,],
			backgroundColor: [
				window.chartColors.darkBlue,
				window.chartColors.blue,
			],
			label: 'Dataset 1'
		}],
		labels: ['Cartes #1','Cartes #2',],
	},
	options: {
		responsive: true,
		legend: {
			display: true,
			position: 'right',
		},
		animation: {
			animateScale: true,
			animateRotate: true
		}
	}
};

var barChartConfig = {
	type: 'bar',
	data: {
		datasets: [
            {
                data: [4,5,3],
                backgroundColor: [
                    window.chartColors.darkBlue,
                    window.chartColors.darkBlue,
                    window.chartColors.darkBlue,
                ],
                label: 'Cartes #1'
            },
            {
                data: [3,4,4],
                backgroundColor: [
                    window.chartColors.blue,
                    window.chartColors.blue,
                    window.chartColors.blue,
                ],
                label: 'Cartes #2'
            },
        ],
		labels: ['01/08/2','02/08/2','03/08/2'],
	},
	options: {
		responsive: true,
		legend: {
			display: true,
			position: 'right',
		},
		animation: {
			animateScale: true,
			animateRotate: true
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
	}
};

window.onload = function() {
    $('#myCollapsible').collapse({
        toggle: false
    })

    $('#myCollapsible').collapse({
        toggle: false
    })

	var ctx = document.getElementById('totalOperatingTime1').getContext('2d');
    window.myDoughnut = new Chart(ctx, totalOperatingTimeConfig1);
    
    var ctx2 = document.getElementById('totalOperatingTime2').getContext('2d');
    window.chart2 = new Chart(ctx2, barChartConfig);
    
    var ctx3 = document.getElementById('averageOperatingTime').getContext('2d');
    window.chart3 = new Chart(ctx3, barChartConfig);
    
    var ctx4 = document.getElementById('numberOfOperations').getContext('2d');
    window.chart4 = new Chart(ctx4, barChartConfig);
};