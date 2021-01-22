
var config = {
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

window.onload = function() {
	var ctx = document.getElementById('processChart').getContext('2d');
	window.myDoughnut = new Chart(ctx, config);
};