// Toggle Sidebar
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    sidebar.classList.toggle('collapsed');
    mainContent.classList.toggle('collapsed');
}

// Initial Mock Data for Charts (Google Analytics)
let barChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
        label: 'Visitors',
        data: [1200, 1500, 1800, 2200, 1900, 2400],
        backgroundColor: 'rgba(76, 175, 80, 0.7)', // Neon green
        borderColor: 'rgba(76, 175, 80, 1)',
        borderWidth: 1,
    }]
};

let lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
        label: 'Website Traffic',
        data: [5000, 5200, 5600, 6200, 5900, 6500],
        borderColor: 'rgba(0, 204, 255, 0.9)', // Cyan line
        backgroundColor: 'rgba(0, 204, 255, 0.2)', // Light cyan fill
        fill: true,
        tension: 0.4,
    }]
};

// Bar Chart (Visitors)
const ctx1 = document.getElementById('barChart').getContext('2d');
const barChart = new Chart(ctx1, {
    type: 'bar',
    data: barChartData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                titleColor: '#fff',
                bodyColor: '#fff',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: '#fff',
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.2)',
                },
            },
            x: {
                ticks: {
                    color: '#fff',
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.2)',
                },
            },
        },
    },
});

// Line Chart (Website Traffic)
const ctx2 = document.getElementById('lineChart').getContext('2d');
const lineChart = new Chart(ctx2, {
    type: 'line',
    data: lineChartData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: '#fff',
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    color: '#fff',
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.2)',
                },
            },
            y: {
                ticks: {
                    color: '#fff',
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.2)',
                },
            },
        },
    },
});

// Function to generate random data for demo purposes Google Analytics currently blocked - 9:04 am
function generateRandomData() {
    return Math.floor(Math.random() * 1000) + 1000; // Random data between 1000 and 2000
}

// Function to update the Bar and Line Charts and the displayed numbers every 2 seconds
function updateCharts() {
    // Update Bar Chart Data
    barChartData.datasets[0].data = barChartData.datasets[0].data.map(data => data + generateRandomData() / 10);
    barChart.update(); // Update bar chart

    // Update Line Chart Data
    lineChartData.datasets[0].data = lineChartData.datasets[0].data.map(data => data + generateRandomData() / 20);
    lineChart.update(); // Update line chart

    // Update displayed numbers
    const visitorCount = document.getElementById('visitorCount');
    const trafficCount = document.getElementById('trafficCount');

    // Update the numbers with new data
    visitorCount.textContent = barChartData.datasets[0].data[barChartData.datasets[0].data.length - 1].toFixed(0);
    trafficCount.textContent = lineChartData.datasets[0].data[lineChartData.datasets[0].data.length - 1].toFixed(0);
}

// Set an interval to update charts and numbers every 2 seconds
setInterval(updateCharts, 2000);
