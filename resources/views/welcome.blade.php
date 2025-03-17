<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />

        <!-- Styles / Scripts -->
        @if (file_exists(public_path('build/manifest.json')) || file_exists(public_path('hot')))
            @vite(['resources/css/app.css', 'resources/js/app.js'])
        @endif

        <!-- Font Awesome for icons -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
    </head>
    <body>
        <!-- Sidebar -->
        <aside class="sidebar" id="sidebar">
            <div class="sidebar-toggle" id="sidebar-toggle">
                <i class="fa-solid fa-chevron-left"></i>
            </div>
            <div class="sidebar-logo">
                <img src="/api/placeholder/32/32" alt="Logo">
                <h1>It's Monday</h1>
            </div>
            <nav class="sidebar-menu">
                <a href="#" class="menu-item active">
                    <i class="fa-solid fa-house"></i>
                    <span>Dashboard</span>
                </a>
                <a href="#" class="menu-item">
                    <i class="fa-solid fa-chart-simple"></i>
                    <span>Analytics</span>
                </a>
                <a href="#" class="menu-item">
                    <i class="fa-solid fa-user-group"></i>
                    <span>Customers</span>
                </a>
                <a href="#" class="menu-item">
                    <i class="fa-solid fa-box"></i>
                    <span>Products</span>
                </a>
                <a href="#" class="menu-item">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <span>Orders</span>
                </a>
                <a href="#" class="menu-item">
                    <i class="fa-solid fa-gear"></i>
                    <span>Settings</span>
                </a>
            </nav>
            <div class="sidebar-footer">
                <img src="/api/placeholder/36/36" alt="User avatar">
                <div class="user-info">
                    <div class="user-name">Alex Johnson</div>
                    <div class="user-role">Administrator</div>
                </div>
            </div>
        </aside>

        <!-- Navbar -->
        <header class="navbar" id="navbar">
            <div class="breadcrumb">
                <span class="breadcrumb-item">Dashboard</span>
                <span class="breadcrumb-divider">/</span>
                <span class="breadcrumb-item active">Overview</span>
            </div>
            <div class="navbar-actions">
                <div class="search-bar">
                    <i class="fa-solid fa-search"></i>
                    <input type="text" placeholder="Search...">
                </div>
                <div class="notification-icon">
                    <i class="fa-regular fa-bell"></i>
                    <span class="notification-badge">3</span>
                </div>
                <div class="theme-toggle" id="theme-toggle">
                    <i class="fa-solid fa-sun"></i>
                </div>
                <div class="user-dropdown">
                    <img src="/api/placeholder/32/32" alt="User avatar">
                    <i class="fa-solid fa-chevron-down"></i>
                </div>
            </div>
        </header>

        <!-- Main Content -->
        <main class="main-content" id="main-content">
            <section class="welcome-header">
                <h1>Welcome back, Alex</h1>
                <p>Here's what's happening with your projects today</p>
            </section>

            <section class="stats-grid">
                <div class="stat-card">
                    <div class="stat-card-header">
                        <h3>Total Revenue</h3>
                        <i class="fa-solid fa-dollar-sign"></i>
                    </div>
                    <div class="stat-card-value">$24,680</div>
                    <div class="stat-card-trend trend-up">
                        <i class="fa-solid fa-arrow-up"></i>
                        <span>12% from last month</span>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-card-header">
                        <h3>New Customers</h3>
                        <i class="fa-solid fa-users"></i>
                    </div>
                    <div class="stat-card-value">843</div>
                    <div class="stat-card-trend trend-up">
                        <i class="fa-solid fa-arrow-up"></i>
                        <span>4.2% from last month</span>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-card-header">
                        <h3>Active Projects</h3>
                        <i class="fa-solid fa-folder"></i>
                    </div>
                    <div class="stat-card-value">32</div>
                    <div class="stat-card-trend trend-down">
                        <i class="fa-solid fa-arrow-down"></i>
                        <span>2% from last month</span>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-card-header">
                        <h3>Task Completion</h3>
                        <i class="fa-solid fa-check"></i>
                    </div>
                    <div class="stat-card-value">78%</div>
                    <div class="stat-card-trend trend-up">
                        <i class="fa-solid fa-arrow-up"></i>
                        <span>5% from last month</span>
                    </div>
                </div>
            </section>

            <section class="quick-actions">
                <div class="section-header">
                    <h2>Quick Actions</h2>
                </div>
                <div class="action-buttons">
                    <div class="action-button">
                        <i class="fa-solid fa-plus"></i>
                        <span>New Project</span>
                    </div>
                    <div class="action-button">
                        <i class="fa-solid fa-user-plus"></i>
                        <span>Add Customer</span>
                    </div>
                    <div class="action-button">
                        <i class="fa-solid fa-file-invoice"></i>
                        <span>Create Invoice</span>
                    </div>
                    <div class="action-button">
                        <i class="fa-solid fa-calendar-plus"></i>
                        <span>Schedule Meeting</span>
                    </div>
                </div>
            </section>

            <section class="analytics">
                <div class="section-header">
                    <h2>Performance Analytics</h2>
                    <a href="#">View Details</a>
                </div>
                <div class="chart-container">
                    <canvas id="performance-chart" class="chart"></canvas>
                </div>
            </section>

            <section class="recent-activity">
                <div class="section-header">
                    <h2>Recent Activity</h2>
                    <a href="#">View All</a>
                </div>
                <div class="activity-list">
                    <div class="activity-item">
                        <div class="activity-icon">
                            <i class="fa-solid fa-file"></i>
                        </div>
                        <div class="activity-content">
                            <h4>Project Proposal Approved</h4>
                            <p>The proposal for "E-commerce Platform Redesign" has been approved by the client.</p>
                            <span class="activity-time">2 hours ago</span>
                        </div>
                    </div>
                    <div class="activity-item">
                        <div class="activity-icon">
                            <i class="fa-solid fa-user-plus"></i>
                        </div>
                        <div class="activity-content">
                            <h4>New Team Member</h4>
                            <p>Sarah Chen has joined the Design Team.</p>
                            <span class="activity-time">Yesterday at 4:23 PM</span>
                        </div>
                    </div>
                    <div class="activity-item">
                        <div class="activity-icon">
                            <i class="fa-solid fa-comment"></i>
                        </div>
                        <div class="activity-content">
                            <h4>New Comment</h4>
                            <p>Michael left a comment on "Mobile App Development" task.</p>
                            <span class="activity-time">Yesterday at 2:15 PM</span>
                        </div>
                    </div>
                    <div class="activity-item">
                        <div class="activity-icon">
                            <i class="fa-solid fa-check"></i>
                        </div>
                        <div class="activity-content">
                            <h4>Task Completed</h4>
                            <p>The "User Authentication Module" has been marked as completed.</p>
                            <span class="activity-time">Mar 16, 2025</span>
                        </div>
                    </div>
                </div>
            </section>

            <footer class="footer">
                <div class="copyright">© 2025 AppName. All rights reserved.</div>
                <div class="footer-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Contact Support</a>
                </div>
            </footer>
        </main>
    </body>
</html>