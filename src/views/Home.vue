<template>
	<div class="home">
		<h1>Home</h1>
		<input type="text" v-model="search" />
		<p>search term - {{ search }}</p>
		<div v-for="name in matchingNames" :key="name">{{ name }}</div>
		<button @click="handleClick">Stop Effect</button>
	</div>
</template>

<script>
import { computed, ref, watch, watchEffect } from 'vue'
export default {
	name: 'Home',
	setup() {
		const search = ref('')
		const names = ref(['a', 'b', 'c', 'd', 'e', 'f'])

		const stopWatch = watch(search, () => {
			console.log('Did smthg')
		})

		const stopEffect = watchEffect(() => {
			console.log('Did smthg in e', search.value)
		})

		const handleClick = () => {
			stopWatch()
			stopEffect()
		}

		const matchingNames = computed(() => {
			return names.value.filter((name) => name.includes(search.value))
		})

		return { names, search, matchingNames, handleClick }
	},
}
</script>
