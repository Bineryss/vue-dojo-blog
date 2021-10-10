<template>
  <div v-if="condition">
    <slot/>
  </div>
  <div v-else-if="error">{{ error }}</div>
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

</style>