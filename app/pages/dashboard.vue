<template>
	<div class="dashboard-page">
		<h1>Dashboard</h1>
		<p>Team performance overview</p>

		<div class="stats-grid">
			<div class="stat-card">
				<h3>Total Teams</h3>
				<p class="stat-number">12</p>
			</div>
			<div class="stat-card">
				<h3>Active Members</h3>
				<p class="stat-number">48</p>
			</div>
			<div class="stat-card">
				<h3>Avg Speed</h3>
				<p class="stat-number">25.5 km/h</p>
			</div>
			<div class="stat-card">
				<h3>Records This Month</h3>
				<p class="stat-number">156</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	layout: "default",
});

// You can use middleware here
// middleware: ['auth']
</script>

<style scoped>
.dashboard-page {
	padding: 2rem 0;
}

.dashboard-page h1 {
	font-size: 2rem;
	margin-bottom: 0.5rem;
	color: #1a1a1a;
}

.dashboard-page > p {
	color: #666;
	margin-bottom: 2rem;
}

.stats-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	gap: 1.5rem;
	margin-top: 2rem;
}

.stat-card {
	background: white;
	padding: 2rem;
	border-radius: 8px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	text-align: center;
	transition:
		transform 0.3s ease,
		box-shadow 0.3s ease;
}

.stat-card:hover {
	transform: translateY(-5px);
	box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.stat-card h3 {
	color: #666;
	margin: 0 0 1rem 0;
	font-size: 0.9rem;
	text-transform: uppercase;
	font-weight: 600;
}

.stat-number {
	font-size: 2rem;
	font-weight: 700;
	color: #00dc82;
	margin: 0;
}
</style>
