
var doughnutConfig = {
	type: 'doughnut',
	data: {
		datasets: [{
			data: [
				4,
				4,
				2,
			],
			backgroundColor: [
				window.chartColors.darkBlue,
				window.chartColors.blue,
				window.chartColors.grey,
			],
			label: 'Dataset 1'
		}],
		labels: [
			'Espera',
			'Ejecucion',
			'Error',
		],
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

var barConfig = {
	type: 'bar',
	data: {
		labels: ['Espera', 'Ejecucion', 'Error'],
		datasets: [{
			label: 'process',
			data: [4, 4, 1],
			backgroundColor: [
				window.chartColors.darkBlue,
				window.chartColors.blue,
				window.chartColors.grey,
			],
		},
	]
	},
	options: {
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero: true
				}
			}]
		},
		responsive: true,
		legend: {
			display: false,
			position: 'right',
		},
		animation: {
			animateScale: true,
			animateRotate: true
		}
	}
}

window.onload = function() {
	this.loadDoughnutChart();
};

function loadDoughnutChart() {
	var ctx = document.getElementById('processDoughnutChart').getContext('2d');
	window.processDoughnut = new Chart(ctx, doughnutConfig);
}

function loadBarChart() {
	var ctx = document.getElementById('processBarChart').getContext('2d');
	window.processBar = new Chart(ctx, barConfig);
}

$(".process-chart").click(function () {
	$(this).toggleClass("bar-chart");
	$(this).toggleClass("doughnut-chart");
	$( "#processDoughnutChart").toggleClass('d-none');
	$( "#processBarChart").toggleClass('d-none');
	let change = $(this).hasClass( "bar-chart");
	if (change) {
		loadDoughnutChart();
	} else {
		loadBarChart();
	}
})
