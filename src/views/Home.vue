<template>
	<div class="home">
		<h1>Home</h1>
		<p ref="p">{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
		<button @click="updateNinjaOne">Click Me</button>
	</div>
</template>

<script>
import { ref, reactive } from '@vue/reactivity'
export default {
	name: 'Home',
	setup() {
		const ninjaOne = reactive({ name: 'Ninja', age: 30 })

		const updateNinjaOne = () => {
			ninjaOne.age = 29
		}

		return {
			ninjaOne,
			updateNinjaOne,
		}
	},
}
</script>
