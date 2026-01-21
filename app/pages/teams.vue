<template>
	<div class="teams-page">
		<h1>Teams</h1>
		<p>Manage and view all teams</p>

		<div class="teams-grid">
			<div class="team-card" v-for="team in teams" :key="team.id">
				<h2>{{ team.name }}</h2>
				<p>{{ team.members }} members</p>
				<p class="avg-speed">Avg Speed: {{ team.avgSpeed }} km/h</p>
				<NuxtLink :to="`/teams/${team.id}`" class="btn-view">View Details</NuxtLink>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
interface Team {
	id: string;
	name: string;
	members: number;
	avgSpeed: number;
}

definePageMeta({
	layout: "default",
});

const teams = ref<Team[]>([
	{ id: "1", name: "Alpha Team", members: 4, avgSpeed: 28.5 },
	{ id: "2", name: "Beta Team", members: 5, avgSpeed: 26.3 },
	{ id: "3", name: "Gamma Team", members: 3, avgSpeed: 31.2 },
]);
</script>

<style scoped>
.teams-page {
	padding: 2rem 0;
}

.teams-page h1 {
	font-size: 2rem;
	margin-bottom: 0.5rem;
	color: #1a1a1a;
}

.teams-page > p {
	color: #666;
	margin-bottom: 2rem;
}

.teams-grid {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
	gap: 2rem;
	margin-top: 2rem;
}

.team-card {
	background: white;
	padding: 2rem;
	border-radius: 8px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	transition:
		transform 0.3s ease,
		box-shadow 0.3s ease;
	display: flex;
	flex-direction: column;
}

.team-card:hover {
	transform: translateY(-8px);
	box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.team-card h2 {
	color: #1a1a1a;
	margin: 0 0 1rem 0;
	font-size: 1.3rem;
}

.team-card p {
	color: #666;
	margin: 0.5rem 0;
}

.avg-speed {
	color: #00dc82;
	font-weight: 600;
	margin: 1rem 0 0 0;
}

.btn-view {
	display: inline-block;
	margin-top: auto;
	padding: 0.8rem 1.5rem;
	background-color: #00dc82;
	color: #1a1a1a;
	text-decoration: none;
	border-radius: 4px;
	font-weight: 600;
	transition: background-color 0.3s ease;
	text-align: center;
}

.btn-view:hover {
	background-color: #00b86c;
}
</style>
