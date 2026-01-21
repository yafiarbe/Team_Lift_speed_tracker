<template>
	<header class="header">
		<nav class="navbar">
			<div class="container">
				<div class="navbar-brand">
					<h1>🏋️ Team Lift Speed Tracker</h1>
				</div>
				<ul class="nav-links">
					<li><NuxtLink to="/">Home</NuxtLink></li>
					<li><NuxtLink to="/dashboard">Dashboard</NuxtLink></li>
					<li><NuxtLink to="/teams">Teams</NuxtLink></li>
					<li><NuxtLink to="/about">About</NuxtLink></li>
				</ul>
			</div>
		</nav>
	</header>
</template>

<script setup lang="ts">
// Header component
</script>

<style scoped>
.header {
	background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
	color: white;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
	position: sticky;
	top: 0;
	z-index: 100;
}

.navbar {
	padding: 1.5rem 0;
}

.navbar > div {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.navbar-brand h1 {
	margin: 0;
	font-size: 1.8rem;
	font-weight: 700;
}

.nav-links {
	list-style: none;
	display: flex;
	gap: 2rem;
	margin: 0;
	padding: 0;
}

.nav-links a {
	color: white;
	text-decoration: none;
	font-weight: 500;
	transition: color 0.3s ease;
	padding: 0.5rem 0;
	border-bottom: 2px solid transparent;
}

.nav-links a:hover,
.nav-links a.router-link-active {
	color: #00dc82;
	border-bottom-color: #00dc82;
}

@media (max-width: 768px) {
	.nav-links {
		gap: 1rem;
		font-size: 0.9rem;
	}

	.navbar-brand h1 {
		font-size: 1.3rem;
	}
}
</style>
