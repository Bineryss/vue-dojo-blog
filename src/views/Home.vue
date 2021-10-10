<template>
  <div class="home">
    <h1>Home</h1>
    <Loader :condition="posts.length" :error="error">
      <PostList :posts="posts"/>
    </Loader>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import getPosts from '../hook/getPosts'
import Spinner from "../components/Spinner";
import Loader from "@/components/Loader";

export default {
  name: 'Home',
  components: {Loader, Spinner, PostList},
  setup() {
    const {posts, error, load} = getPosts()
    load()

    return {posts, error}
  },
}
</script>
<style>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>
