<script setup>
  import DynamicClass from '@/components/DynamicClass.vue'
  import Goals from '@/components/Goals.vue';
</script>

<template>
  <h2> Every box has different syntex supported by VueJS to add/remove class dynamically </h2>
  <DynamicClass />
  <Goals title="Please add Goals Here" desc="This is all about V-For" />
</template>





<style>
h2 {
  text-align: center;
  margin: 30px auto;
  color: red;
}
</style>






