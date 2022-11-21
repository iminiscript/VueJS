<template>
    <div class="child__parent">
        <div class="child__left">
            <div>
                <h1>Hello {{ fullName }}</h1>
                <button @click="sendEvents">Click Me</button>
            </div>
            <div>
                <h2>{{ watchConsole }}</h2>
                <h2>{{ watchSingleLabel }}</h2>
                <input type="text" placeholder="Single Watcher" name="name" v-model="inputName">
                <h2>{{ inputName }}</h2>
            </div>
            <div>
                <h2>{{ watchArrayLabel }}</h2>
                <input type="text" placeholder="watcher 1" name="nameOne" v-model="inputOne">
                <input type="text" placeholder="watcher 2" name="nameTwi" v-model="inputTwo"> 
                <h2>
                    <span> Model:1 Output {{ inputOne }}</span><br/>
                    <span> Model:2 Output{{ inputTwo }}</span>
                </h2>
            </div>

            <div>
                <input type="text" placeholder="Reactive watcher 1" name="fname" v-model="state.fname">
                <input type="text" placeholder="Reactive watcher 2" name="lname" v-model="state.lname"> 

                <p>{{ state.fname}} <br/> {{ state.lname}}</p>
            </div>
        </div>
        <div class="child__right">

        </div>
    </div>
</template>

<script setup>
import { ref, computed , watch, reactive } from 'vue'

// export default {
//     name: 'ParentChildEvents',
    // props: {
    //     fullName: {
    //         type: String,
    //     }

    // },

    const props = defineProps({
        fullName: String
    });

    const emit = defineEmits(['sentEventToParent'])

    // setup (context) {
        
        const state = reactive({
            fname: '',
            lname: '',
        });

        const inputName = ref('Maninder');
        const watchSingleLabel = ref('This is single watcher');
        const watchArrayLabel = ref('This Watcher is using Array for multiple changes');
        const watchConsole = ref('check Console.log for changes');

        const inputOne = ref('');
        const inputTwo = ref('');

        watch(inputName, (newValue, oldValue) => {
            console.log("🚀 ~ oldValue", oldValue);
            console.log("🚀 ~ newValue", newValue);
            
        }, {
            immediate: true
        }
        );

        watch(() => state.fname, (newValue, oldValue) => {
            console.log("🚀 ~ oldValue", oldValue);
            console.log("🚀 ~ newValue", newValue);
            
        })

        watch([inputOne, inputTwo], ([newOne, newTwo], [prevOne, prevTwo]) => {
            console.log("🚀 ~ newTwo", newTwo);
            console.log("🚀 ~ newOne", newOne);
            console.log("🚀 ~ prevTwo", prevTwo);
            console.log("🚀 ~ prevOne", prevOne);
            
        });

        
        

        function sendEvents() {
            emit('sentEventToParent');
            const test = document.querySelector('h1');
            console.log(test);
        }

        
    //     return {
    //         sendEvents,
    //         inputName,
    //         inputOne,
    //         inputTwo,
    //         watchConsole,
    //         watchSingleLabel,
    //         watchArrayLabel


    //     }
    // }
// }
</script>

<style  scoped>

* {
    margin:5px;
}

</style>