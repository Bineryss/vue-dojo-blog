<template>
  <div class="home">
    <h1>Tags</h1>
    <Loader :condition="postsWithTag.length" :error="error">
      <div class="layout">
        <PostList :posts="postsWithTag"/>
        <TagCloud :posts="posts"/>
      </div>
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
import TagCloud from "@/components/TagCloud";

export default {
  name: "Tag",
  components: {TagCloud, Loader, Spinner, PostList},
  setup: function () {
    const {posts, error, load} = getPosts()
    load()

    const route = useRoute()

    const postsWithTag = computed(() => {
      return posts.value.filter((post) => post.tags.includes(route.params.tag))
    })


    return {
      error,
      posts,
      postsWithTag
    }
  }
}
</script>
<style>

</style>
