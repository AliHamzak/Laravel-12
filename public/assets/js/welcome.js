document.addEventListener('DOMContentLoaded', function() {
    // Toggle sidebar
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebar = document.getElementById('sidebar');
    const navbar = document.getElementById('navbar');
    const mainContent = document.getElementById('main-content');
    
    sidebarToggle.addEventListener('click', function() {
        sidebar.classList.toggle('collapsed');
        navbar.classList.toggle('collapsed');
        mainContent.classList.toggle('collapsed');
        
        // Toggle the chevron icon direction
        const icon = sidebarToggle.querySelector('i');
        if (sidebar.classList.contains('collapsed')) {
            icon.classList.remove('fa-chevron-left');
            icon.classList.add('fa-chevron-right');
        } else {
            icon.classList.remove('fa-chevron-right');
            icon.classList.add('fa-chevron-left');
        }
    });
    
    // Toggle dark mode
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        
        // Update the theme toggle icon
        const icon = themeToggle.querySelector('i');
        if (body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        } else {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
        
        // Save theme preference to localStorage
        const isDarkMode = body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
    });
    
    // Check for saved theme preference
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    if (savedDarkMode) {
        body.classList.add('dark-mode');
        const icon = themeToggle.querySelector('i');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
    
    // Initialize the performance chart
    if (document.getElementById('performance-chart')) {
        initializeChart();
    }
    
    // Add hover effect to stat cards
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Initialize dropdown functionality
    const userDropdown = document.querySelector('.user-dropdown');
    if (userDropdown) {
        // This would typically create a dropdown menu
        // For demonstration, we'll just add a click event
        userDropdown.addEventListener('click', function() {
            // In a real app, this would toggle a dropdown menu
            console.log('User dropdown clicked');
        });
    }
    
    // Initialize notification functionality
    const notificationIcon = document.querySelector('.notification-icon');
    if (notificationIcon) {
        // This would typically open a notification panel
        notificationIcon.addEventListener('click', function() {
            // In a real app, this would toggle a notification panel
            console.log('Notification icon clicked');
        });
    }
    
    // Add responsive behavior
    handleResponsive();
    window.addEventListener('resize', handleResponsive);
});

// Initialize chart with Chart.js
function initializeChart() {
    // Check if Chart.js is loaded
    if (typeof Chart === 'undefined') {
        // If Chart.js is not available, load it dynamically
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js';
        script.onload = createChart;
        document.head.appendChild(script);
    } else {
        createChart();
    }
}

function createChart() {
    const ctx = document.getElementById('performance-chart').getContext('2d');
    
    // Sample data for the chart
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Revenue',
                data: [12, 19, 15, 27, 22, 30],
                borderColor: '#4f46e5',
                backgroundColor: 'rgba(79, 70, 229, 0.1)',
                tension: 0.4,
                fill: true
            },
            {
                label: 'Users',
                data: [5, 12, 18, 20, 25, 32],
                borderColor: '#10b981',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                tension: 0.4,
                fill: true
            }
        ]
    };
    
    // Chart configuration
    const config = {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        boxWidth: 10,
                        usePointStyle: true,
                        pointStyle: 'circle'
                    }
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    titleColor: '#1f2937',
                    bodyColor: '#1f2937',
                    borderColor: 'rgba(0, 0, 0, 0.05)',
                    borderWidth: 1,
                    padding: 10,
                    boxWidth: 10,
                    usePointStyle: true,
                    callbacks: {
                        labelPointStyle: function() {
                            return {
                                pointStyle: 'circle',
                                rotation: 0
                            };
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    }
                },
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    },
                    ticks: {
                        precision: 0
                    }
                }
            },
            elements: {
                point: {
                    radius: 3,
                    hoverRadius: 5
                }
            },
            interaction: {
                intersect: false,
                mode: 'index'
            }
        }
    };
    
    // Create the chart
    const myChart = new Chart(ctx, config);
    
    // Update chart when dark mode changes
    document.body.addEventListener('classChange', function() {
        const isDarkMode = document.body.classList.contains('dark-mode');
        
        if (isDarkMode) {
            myChart.options.plugins.tooltip.backgroundColor = 'rgba(31, 41, 55, 0.9)';
            myChart.options.plugins.tooltip.titleColor = '#f9fafb';
            myChart.options.plugins.tooltip.bodyColor = '#f9fafb';
            myChart.options.plugins.legend.labels.color = '#f9fafb';
            myChart.options.scales.x.ticks.color = '#d1d5db';
            myChart.options.scales.y.ticks.color = '#d1d5db';
            myChart.options.scales.y.grid.color = 'rgba(255, 255, 255, 0.05)';
        } else {
            myChart.options.plugins.tooltip.backgroundColor = 'rgba(255, 255, 255, 0.9)';
            myChart.options.plugins.tooltip.titleColor = '#1f2937';
            myChart.options.plugins.tooltip.bodyColor = '#1f2937';
            myChart.options.plugins.legend.labels.color = '#1f2937';
            myChart.options.scales.x.ticks.color = '#6b7280';
            myChart.options.scales.y.ticks.color = '#6b7280';
            myChart.options.scales.y.grid.color = 'rgba(0, 0, 0, 0.05)';
        }
        
        myChart.update();
    });
    
    // Create and dispatch an event when dark mode changes
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.attributeName === 'class') {
                const event = new Event('classChange');
                document.body.dispatchEvent(event);
            }
        });
    });
    
    observer.observe(document.body, { attributes: true });
}

// Handle responsive behavior
function handleResponsive() {
    const width = window.innerWidth;
    const sidebar = document.getElementById('sidebar');
    const navbar = document.getElementById('navbar');
    const mainContent = document.getElementById('main-content');
    const sidebarToggle = document.getElementById('sidebar-toggle');
    
    if (width <= 1024) {
        sidebar.classList.add('collapsed');
        navbar.classList.add('collapsed');
        mainContent.classList.add('collapsed');
        
        if (sidebarToggle) {
            const icon = sidebarToggle.querySelector('i');
            icon.classList.remove('fa-chevron-left');
            icon.classList.add('fa-chevron-right');
        }
    } else {
        // Only expand if user hasn't manually collapsed
        if (!localStorage.getItem('sidebarCollapsed') === 'true') {
            sidebar.classList.remove('collapsed');
            navbar.classList.remove('collapsed');
            mainContent.classList.remove('collapsed');
            
            if (sidebarToggle) {
                const icon = sidebarToggle.querySelector('i');
                icon.classList.remove('fa-chevron-right');
                icon.classList.add('fa-chevron-left');
            }
        }
    }
    
    // Save sidebar state
    sidebarToggle.addEventListener('click', function() {
        localStorage.setItem('sidebarCollapsed', sidebar.classList.contains('collapsed'));
    });
}

// Add animation for action buttons
document.querySelectorAll('.action-button').forEach(button => {
    button.addEventListener('click', function() {
        this.classList.add('clicked');
        setTimeout(() => {
            this.classList.remove('clicked');
        }, 200);
    });
});

// Add ripple effect to menu items
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
        ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});