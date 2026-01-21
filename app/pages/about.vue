<template>
	<div class="about-page">
		<h1>About Team Lift Speed Tracker</h1>

		<section class="about-section">
			<h2>What We Do</h2>
			<p>
				Team Lift Speed Tracker is a comprehensive platform designed to help teams monitor, track, and improve their lifting performance. Whether you're training for competition or just
				looking to improve your team's efficiency, our platform provides the tools you need.
			</p>
		</section>

		<section class="about-section">
			<h2>Key Features</h2>
			<ul>
				<li>Real-time speed tracking and monitoring</li>
				<li>Detailed analytics and performance insights</li>
				<li>Team collaboration tools</li>
				<li>Historical data and trends</li>
				<li>Mobile-friendly interface</li>
			</ul>
		</section>

		<section class="about-section">
			<h2>Technology Stack</h2>
			<p>Built with:</p>
			<ul>
				<li>Nuxt 4.2.2 - Modern Vue.js framework</li>
				<li>Pinia - State management</li>
				<li>TypeScript - Type-safe development</li>
				<li>Nuxt UI - Beautiful components</li>
			</ul>
		</section>

		<section class="about-section">
			<h2>Contact & Support</h2>
			<p>
				Have questions or need support? Reach out to us at:
				<br />
				<strong>Email:</strong> support@teamlift.com
				<br />
				<strong>Phone:</strong> +1 (555) 123-4567
			</p>
		</section>
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	layout: "default",
});
</script>

<style scoped>
.about-page {
	padding: 2rem 0;
	max-width: 800px;
	margin: 0 auto;
}

.about-page h1 {
	font-size: 2.5rem;
	color: #1a1a1a;
	margin-bottom: 2rem;
}

.about-section {
	margin-bottom: 3rem;
	padding-bottom: 2rem;
	border-bottom: 1px solid #eee;
}

.about-section:last-child {
	border-bottom: none;
}

.about-section h2 {
	color: #1a1a1a;
	margin-bottom: 1rem;
	font-size: 1.5rem;
}

.about-section p {
	color: #666;
	line-height: 1.6;
	margin: 1rem 0;
}

.about-section ul {
	color: #666;
	line-height: 2;
	padding-left: 2rem;
}

.about-section li {
	margin-bottom: 0.5rem;
}
</style>
