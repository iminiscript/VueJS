<template>
    <div class="dynamicProp">
            <h1>{{ title}} </h1>
            <h2>{{ subTitle }} </h2>
            <p>{{ fullName }} </p>
            <hr/>
            <ul>
                <li>{{ id }}</li>
                <li>{{ label }}</li>
                <li>{{ cat }}</li>
            </ul>
        
    </div>
</template>

<script>
import { computed } from 'vue'

export default {
    name: 'Props',
    props: {
        title: {
            type: String,
        },
        subTitle: {
            type: String,
        },
        firstName: {
            type: String,
        },
        lastName: {
            type: String,
        }, 
        id: {
            type: String,
        }, 
        label: {
            type: String,
        },
        cat: {
            type: String,
        },

    },

    setup (props) {

        // Computed Properties 
        const fullName = computed(() => {
            return `${props.firstName} ${props.lastName}`
        });

        return {
            fullName
        }
    }
}
</script>

<style  scoped>

</style>