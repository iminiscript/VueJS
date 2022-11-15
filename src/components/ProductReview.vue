<template>
    <form class="reviewForm" @submit.prevent="addReview">
        <h2> Leave a reply </h2>
        <label for="name">Name:  <sup>*</sup> </label>
        <input type="text" name="name" placeholder="name" v-model="name"/>
        <label for="review">Write your review <sup>*</sup></label>
        <textarea name="review" id="" cols="30" rows="10" v-model="review"></textarea>
        <label for="email">Email ID <sup>*</sup></label>
        <input type="email" name="email" id="user" v-model="email">
        <button type="submit">Submit</button>
    </form>
</template>

<script>
export default {
    name: 'Review Form',
    data() {
        return {
            name: '',
            review: '',
            email: ''
        }
    },

    methods: {
        addReview() {
            if (this.name === '' || this.review === '' || this.email === '' ) {
                alert('All fields are required so please fill them');
                return;
            }
            let reviews = {
                name: this.name,
                review: this.review,
                email: this.email,
            }
            this.$emit('submit-review', reviews);

            this.name =  '',
            this.review  = '',
            this.email = ''
        },
    },
}
</script>

<style scoped>
    .reviewForm {
        display: flex;
        flex-direction: column;
        width: 40%;
    }

    input, textarea {
        padding: 10px;
        border: 1px solid;
        margin: 10px 0;
    }

    button {
        padding: 15px;
        background-color: black;
        color: aliceblue;
        cursor: pointer;
    }
    sup {
        font-size: 14px;
        color: brown;
    }
</style>