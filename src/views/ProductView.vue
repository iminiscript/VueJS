<script setup>
import Product from '../components/Product.vue'
import ProductReview from '../components/ProductReview.vue'
import ReviewList from '../components/ReviewList.vue'
</script>


<template>
  <div class="product">
    <Product  />
    <div class="reviews">
      <ReviewList :reviews="reviews" />
      <ProductReview  @submit-review="addReviews" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reviews: []
    }
  },
  methods: {
    addReviews(review) {
      this.reviews.push(review);
    }
  },
}
</script>

<style scoped>
.reviews {
  display: flex;
  justify-content: space-around;
  max-width: 1000px;
  margin: 50px auto;
}
</style>
