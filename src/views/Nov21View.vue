<template>
    <div>
        <h2> Exploring more composition API</h2>
        <ParentChildEvents fullName="Maninder" @sentEventToParent="callEventFromChild"   />
        
        <LifeCycleHooks />
    </div>
</template>

<script setup>
import ParentChildEvents from '@/components/ParentChildEvents.vue';
import LifeCycleHooks from '@/components/LifeCycleHooks.vue';

// export default {
//     name: 'Nov_19',
//     components: {
//         ParentChildEvents,
//     },
    
    // setup() {

        function callEventFromChild(hero) {
            alert(`Calling ${hero}`);
            const test2 = document.querySelector('h2');
            console.log(test2);
        }

        // function callEventFromChild(heri) {
        //     console.log('Event Fired')
        //     console.log(`${heri}`)
        // }

    //     return {
    //         callEventFromChild,
    //     }
    // }
// }
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