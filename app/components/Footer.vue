<template>
	<footer class="footer">
		<div class="container">
			<div class="footer-content">
				<div class="footer-section">
					<h3>Team Lift Speed Tracker</h3>
					<p>Track your team's lifting performance</p>
				</div>
				<div class="footer-section">
					<h4>Quick Links</h4>
					<ul>
						<li><NuxtLink to="/">Home</NuxtLink></li>
						<li><NuxtLink to="/dashboard">Dashboard</NuxtLink></li>
						<li><NuxtLink to="/teams">Teams</NuxtLink></li>
					</ul>
				</div>
				<div class="footer-section">
					<h4>Resources</h4>
					<ul>
						<li><a href="#">Documentation</a></li>
						<li><a href="#">Support</a></li>
						<li><a href="#">Contact</a></li>
					</ul>
				</div>
			</div>
			<div class="footer-bottom">
				<p>&copy; 2026 Team Lift Speed Tracker. All rights reserved.</p>
			</div>
		</div>
	</footer>
</template>

<script setup lang="ts">
// Footer component
</script>

<style scoped>
.footer {
	background-color: #1a1a1a;
	color: white;
	padding: 3rem 0 1rem;
	margin-top: auto;
	border-top: 1px solid #333;
}

.footer-content {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	gap: 2rem;
	margin-bottom: 2rem;
}

.footer-section h3 {
	font-size: 1.2rem;
	margin-bottom: 1rem;
	color: #00dc82;
}

.footer-section h4 {
	margin-bottom: 0.8rem;
	color: #fff;
}

.footer-section p {
	color: #999;
	margin: 0;
	font-size: 0.9rem;
}

.footer-section ul {
	list-style: none;
	padding: 0;
	margin: 0;
}

.footer-section ul li {
	margin-bottom: 0.5rem;
}

.footer-section a {
	color: #999;
	text-decoration: none;
	transition: color 0.3s ease;
}

.footer-section a:hover {
	color: #00dc82;
}

.footer-bottom {
	border-top: 1px solid #333;
	padding-top: 1.5rem;
	text-align: center;
	color: #666;
	font-size: 0.9rem;
}
</style>
