<template>
    <div>
        <h2> Dynamic V-For Props with composition API</h2>
        <div class="props">
            <Props 
                v-for="item in items"
                :key="item.id" 
                :title="item.title"
                :subTitle="item.subTitle"
                :firstName="item.firstName"
                :lastName="item.lastName"
                :id="item.id"
                :label="item.label"
                :cat="item.cat"
            />
        </div>
    </div>
</template>

<script setup>
import Props from '@/components/Props.vue';
import { ref }  from 'vue'

const items = ref( [
        { 
            title: 'Vue',
            subTitle: 'Vuex',
            firstName: 'Maninder',
            lastName: 'Maan',
            id:1, 
            label:"Party Hats", 
            cat:"Hats",
        },
        {   
            title: 'ReactJS',
            subTitle: 'Rust',
            firstName: 'Navjot',
            lastName: 'Maan',
            id:2, 
            label:"Cloths", 
            cat:"Upper",
        },
        {   
            title: 'Angular',
            subTitle: 'Google',
            firstName: 'Shanel',
            lastName: 'Kaur',
            id:3, 
            label:"Bottom", 
            cat:"Bottom",
        }
    ])

    const count = ref(
            { 
                key: 'This is String', 
                key2: 'This is in Object form'
            }
        );
</script>

<style scoped>
.props {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    margin-top: 20px;
    
}
.dynamicProp{
    border: 1px solid red;
    padding: 20px;
}
</style>