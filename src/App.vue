<style lang="scss">
@import './assets/scss/GlobalStyle.scss';
</style>

<script>
import LandingPage from './page/LandingPage.vue';

export default {
	name: 'App',
	components: {
		LandingPage,
	},
};
</script>

<template>
	<div id="app">
		<LandingPage />
	</div>
</template>
