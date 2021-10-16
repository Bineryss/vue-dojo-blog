<template>
  <div class="container">
    <div class="spin"/>
    <p> Loading...</p>
  </div>
</template>

<script>
export default {
  name: "Spinner"
}
</script>

<style scoped>
.container {
  display: grid;
  place-items: center;
}

.spin {
  display: block;
  width: 40px;
  aspect-ratio: 1;
  margin: 30px auto;
  border: 3px solid transparent;
  border-radius: 50%;
  border-top-color: var(--primary-color);
  animation: spin 1s ease infinite;
}

@keyframes spin {
  to {
    transform: rotateZ(360deg);
  }
}
</style>