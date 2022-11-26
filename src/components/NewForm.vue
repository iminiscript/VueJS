<template>
    <div>
        <form  @submit.prevent="SubmitData">
            <div>
                <label>Name</label>
                <input type="text" placeholder="Name" v-model="enterName">
            </div>
            <div>
                <label>Phone</label>
                <input type="text" placeholder="Phone" v-model="enterPhone">
            </div>
            <div>
                <button>CLick Events Form Submit</button>
            </div>

        </form>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    const emits = defineEmits('FormSubmit');

    const enterName = ref('');
    const enterPhone = ref('');

    const SubmitData = () => {
        emits('FormSubmit' , enterName.value, enterPhone.value);
    }


</script>

<style lang="scss" scoped>

</style>