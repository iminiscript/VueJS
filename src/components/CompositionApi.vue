
<script setup>
    import { ref } from 'vue'
    defineProps({
        msg: String
    })

    const count = ref({key: 'This is String', key2: 'This is in Object form'});

    const items = ref( {
        0: {id: 1, label: 'Party Hats', cat: 'Hats'},
        1: {id: 2, label: 'Cloths', cat: 'Upper'},
        2: {id: 3, label: 'Bottom', cat: 'Bottom'},
        3: {id: 4, label: 'Shirts', cat: 'Hats'}, 
        4: {id: 4, label: 'Below is V-Model', cat: 'Hats'}
    
    })

    const itemInput = ref('');
    const task = ref('');
    const todos = ref([]);
    const edit = ref(false);
    const check = ref(false);

    const addTask = () => {
        const todoItem = task.value;
        if(todoItem.length !== 0) {
            todos.value.push(todoItem);
            task.value = '';
        } else {
            alert('Please add any Value to the input')
            
        }
    }

    const removeTodo = (index) => {
        todos.value.splice(index,1);
    }

    const editTodoApp = (status) => {
        edit.value = status;
        task.value = '';
    }
    
    const completeTodo = (index) => {
        check.value = !check.value
    }



</script>

<template>
    <div class="parent">
        <div class="left child">
            <h1> {{ msg }} </h1>
            <p> {{ count.key2  }}</p>
            <ul>
                <li 
                    v-for=" ({ id, label }, index) in items" 
                    :key="id">
                    {{ index }}
                    {{ label}} 
                </li>
            </ul>
            <input type="text" v-model="itemInput">
            <h2> {{ itemInput }}</h2>
        </div>
        <div class="right child">
            <div class="todoContainer">
                <button class="close" @click="editTodoApp(false)">Close the Todo App </button>
                <button class="open" @click="editTodoApp(true)"> Open the Todo App </button>
            </div>
            <div v-if="edit" class="todoApp">
                <form  @submit.prevent="addTask">
                    <h2 v-show="todos.length !== 0"> {{todos.length }} Goals has been added </h2>
                    <input type="text" v-model="task" />
                    <button type="submit">Add Todo</button>
                    <!-- <p> {{ task }}</p> -->
                </form>
                <ul v-if="todos.length">
                    <li class="todoList"
                        :key="index" 
                        v-for="(todo, index) in todos"
                        :class="{ complete: check }"
                    >
                        <span class="todo">{{ todo }}</span> 
                        <span class="complete"> <label @click="completeTodo()"><input  type="checkbox" v-model="check" name="complete">Complete The Todo </label></span>
                        <span @click="removeTodo(index)" class="remove"> Remove </span>
                        <span>{{ check }}</span>
                    </li>
                </ul>
                <h2 v-else> All the Task has been Completed</h2>
            </div>
            <h2 v-else> Todo App is Closed for now - click on the Open Button to add Todo</h2>
        </div>
    </div>
</template>





<style  scoped>
input {
    padding: 10px;
    border: 1px solid;
}
h2 {
    text-align: left;
}

form {
    padding-top: 50px;
}

.parent {
    display: grid;
    grid-template-columns: 1fr 1fr;
    border: solid red 1px;
}
.left {
    border-right: 1px solid red;
}

.child {
    padding: 20px;
}

.todoList, .todoContainer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}


</style>