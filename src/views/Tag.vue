<template>
  <div class="tag">
    <Loader :condition="postsWithTag.length" :error="error">
      <PostList :posts="postsWithTag"/>
    </Loader>
  </div>
</template>

<script>
import {computed} from "@vue/reactivity";
import {useRoute} from "vue-router";
import PostList from "@/components/PostList";
import Spinner from "@/components/Spinner";
import getPosts from "@/hook/getPosts";
import Loader from "@/components/Loader";

export default {
  name: "Tag",
  components: {Loader, Spinner, PostList},
  setup: function () {
    const {posts, error, load} = getPosts()
    load()

    const route = useRoute()

    const postsWithTag = computed(() => {
      return posts.value.filter((post) => post.tags.includes(route.params.tag))
    })


    return {
      error,
      postsWithTag
    }
  }
}
</script>

<style scoped>

</style>