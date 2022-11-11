<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      Learning Goals from <b>14/11 to 22/11</b>
    </h3>
    <h4>PTO dates - <b>17/11 - 18/11</b></h4>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}
h4 {
  color: brown;
  font-size: 1rem;
  padding-top: 10px;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}
b {
  font-weight: bolder;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
