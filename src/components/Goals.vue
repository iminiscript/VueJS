<template>
    <div class="goals">
        <h2> {{ title }} </h2>
        <p> {{ desc }} </p>
         <ul>
            <li v-for="(value, key, index) in {name: 'Maninder', age: 32, Gender: 'Male'}"><span>{{ index + 1}} - {{key.toUpperCase()}}</span>  <span>{{ value}}  </span></li>
        </ul>
        <ul>
            <li v-for="(num, index) in 5"><span>{{index}}</span><span>{{ num }}</span></li>
        </ul>
        <div class="goals__conrainer">
            <input type="text" class="goalsInput" v-model="enterGoalsValue">
            <button type="submit" @click="addGoals()"> Add Goals</button>
        </div>
        <h2 v-if="goals.length == 0 "> You haven't set any Goals for today! Bru!!! </h2>
        <h2 v-else> Yeah!! - My Man - Proud of Yaa !!! Keep Pushing </h2>
        <ul>
            <li :key="goal" 
                v-for="(goal, index) in goals">
                <span>{{ index + 1}} {{ goal }} <input type="text"> </span> 
                <span @click="completeGoal(id)"> Complete Goal </span> 
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        desc: String,
    },
    data() {
        return {
            enterGoalsValue: "",
            goals: [],
        }
    },
    methods: {
        addGoals() {
            if(this.enterGoalsValue !== '') {
                this.goals.push(this.enterGoalsValue);
                this.enterGoalsValue = '';
            }
        }, 
        completeGoal(id) {
            const idx = this.goals.indexOf(id);
            this.goals.splice(idx, 1);
        }

    },
}
</script>

<style  scoped>
.goals {
    padding-top: 50px;
    max-width: 500px;
    margin: 50px auto;
}

input {
    padding: 10px;
    min-width: 300px;
    font-size: 16px;
}

button {
    padding: 12px;
    background-color: chartreuse;
    border: 1px solid chartreuse;
    margin-left: 20px;
}
ul {
    border-bottom: 2px dashed red;
    margin-bottom: 30px;
    padding-bottom: 30px;
}

li {
    display: flex;
    justify-content: space-between;
}
p {
    text-align: center;
}
</style>