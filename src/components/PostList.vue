<template>
	<div class="post-list"></div>
	<div v-for="post in posts" :key="post.id">
		<SinglePost :post="post" />
	</div>
</template>

<script>
import { onMounted } from '@vue/runtime-core'
import SinglePost from '../components/SinglePost.vue'
export default {
	props: ['posts'],
	components: {
		SinglePost,
	},
	setup(props) {
		onMounted(() => {
			
		})
	},
}
</script>

<style></style>
