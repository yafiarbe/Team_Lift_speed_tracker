<template>
	<div class="home-page">
		<h1>Welcome to Team Lift Speed Tracker</h1>
		<p>Track your team's lifting speeds and progress</p>

		<div class="features">
			<div class="feature-card">
				<h2>Track Performance</h2>
				<p>Monitor real-time lifting speeds for your team</p>
			</div>
			<div class="feature-card">
				<h2>Analytics</h2>
				<p>Get detailed insights and statistics</p>
			</div>
			<div class="feature-card">
				<h2>Collaboration</h2>
				<p>Share results and compete with your team</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	layout: "default",
});
</script>

<style scoped>
.home-page {
	text-align: center;
	padding: 2rem 0;
}

.home-page h1 {
	font-size: 2.5rem;
	margin-bottom: 1rem;
	color: #1a1a1a;
}

.home-page p {
	font-size: 1.2rem;
	color: #666;
	margin-bottom: 3rem;
}

.features {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	gap: 2rem;
	margin-top: 3rem;
}

.feature-card {
	background: white;
	padding: 2rem;
	border-radius: 8px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	transition:
		transform 0.3s ease,
		box-shadow 0.3s ease;
}

.feature-card:hover {
	transform: translateY(-5px);
	box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.feature-card h2 {
	color: #1a1a1a;
	margin-bottom: 0.5rem;
}

.feature-card p {
	color: #666;
	margin: 0;
}
</style>
