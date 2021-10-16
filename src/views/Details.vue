<template>
  <Loader :condition="post" :error="error">
    <div class="post">
      <h3>{{ post.title }}</h3>
      <p class="pre">{{ post.body }}</p>
      <button class="delete" @click="handleClick">delete post</button>
    </div>
  </Loader>
</template>

<script>
import getPost from '../hook/getPost'
import Spinner from "../components/Spinner";
import Loader from "@/components/Loader";
import {projectFirestore} from "@/firebase/config";
import {useRouter} from "vue-router";

export default {
  components: {Loader, Spinner},
  props: ['id'],
  setup(props) {
    const {post, error, load} = getPost(props.id)
    const router = useRouter()
    load()

    const handleClick = async () => {
      await projectFirestore.collection('posts')
          .doc(props.id)
          .delete()
      await router.push({name: 'Home'})
    }

    return {
      post,
      error,

      handleClick
    }
  },
}
</script>

<style>
.post {
  max-width: 1000px;
  margin: 0 auto;
}

.post p {
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
}

.pre {
  white-space: pre-wrap;
}

button.delete {
  margin: 100px auto 10px;
}
</style>
