<template>
  <div class="home">
    <h1>Home</h1>
    <Loader :condition="posts.length" :error="error">
      <div class="layout">
        <PostList :posts="posts"/>
        <TagCloud :posts="posts"/>
      </div>
    </Loader>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import getPosts from '../hook/getPosts'
import Spinner from "../components/Spinner";
import Loader from "@/components/Loader";
import TagCloud from "@/components/TagCloud";

export default {
  name: 'Home',
  components: {TagCloud, Loader, Spinner, PostList},
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

.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
</style>
