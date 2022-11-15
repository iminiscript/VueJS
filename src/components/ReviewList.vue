<template>
    <div class="c-productReviews">
        <h2> Reviews: </h2>
        <p> Please addd the reviews from the form right </p>
        <p>PS: we can hide this box but it's just to remind you </p>
        <ul>
            <li v-for="(review, index) in reviews" :key="index">
               Name {{ review.name }} <br/>
               Review {{ review.review }} <br/>
               Email {{ review.email }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: {
            reviews: {
                type: Array,
                default: []
            },
        },
    }
</script>

<style  scoped>
.c-productReviews {
    border: 1px solid;
    width: 40%;
    padding: 20px;
    
}
</style>