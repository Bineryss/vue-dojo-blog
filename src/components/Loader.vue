<template>
  <div v-if="condition">
    <slot/>
  </div>
  <div class="error" v-else-if="error">
    <h2> {{ error }}</h2>
  </div>
  <div v-else>
    <Spinner/>
  </div>
</template>

<script>
import Spinner from "@/components/Spinner";

export default {
  name: "Loader",
  components: {Spinner},
  props: ['condition', 'error']
}
</script>

<style scoped>
.error {
  max-width: 800px;
  margin: 0 auto;
}
</style>