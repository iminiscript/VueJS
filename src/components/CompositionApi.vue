
<script setup>
    // Import ref - Data, Computed - Computed , Reactive - Objects
    import { ref, computed, reactive } from 'vue'
    //
    defineProps({
        msg: {
            ype: String,
            required: true,
            
            default: 'This is Default Value'
        } 

    /** 
        Supported Prop Values 
        String
        Number
        Boolean
        Array
        Object
        Date
        Function
        Symbol
     */
    })

    // Data 
    const count = ref({key: 'This is String', key2: 'This is in Object form'});

    const items = ref( {
        0: {id: 1, label: 'Party Hats', cat: 'Hats'},
        1: {id: 2, label: 'Cloths', cat: 'Upper'},
        2: {id: 3, label: 'Bottom', cat: 'Bottom'},
        3: {id: 4, label: 'Shirts', cat: 'Hats'}, 
        4: {id: 4, label: 'Below is V-Model', cat: 'Hats'}
    
    });

    const state = reactive({count: 0});

    const incriment = () => {
         state.count++;
    }

    const itemInput = ref('');
    
    const task = ref('');

    const newItemHighPriority = ref(false);
    
    const todos = ref([
        
    
    ]);
    
    const edit = ref(false);
    // const check = ref(false);

    // Methods 
    const addTask = () => {
        const todoItem = task.value;
        const priority = newItemHighPriority.value;
        if(todoItem.length !== 0) {
            todos.value.push({
                id: todos.value.length + 1, 
                label: todoItem,
                highPriority: priority
            });
            task.value = '';
            newItemHighPriority.value = false;
        } else {
            alert('Please add any Value to the input')
            
        }
    }

//   function filterFun(todo) {
//       console.log(todos.value.id);
//       todos.value.filter(todo => todo.id = id);
      
//       this.items = this.items.filter((newArry) => newArry.id !== item.id);
     
//   }

    const removeItem = (item) => {
        //this.items.splice(item, 1);
        console.log(item);
        todos.value = todos.value.filter(i => i.id !== item.id);
    }

    const editTodoApp = (status) => {
        edit.value = status;
        task.value = '';
    }
    
    const completeTodo = (todo) => {
        todo.check = !todo.check;
    }

    // Computed properties 
    const characterCount = computed(() => {
        return task.value.length;
    });

    const reverseArray = computed(() => {
        return [...todos.value].reverse();
    })



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
            <div class="reactive">
                <p> This counter is powered by { Vue reactive} </p>
                <h2>{{ state.count }}</h2>
                <button @click="incriment()">Count ++</button>
            </div>
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
                    <label>
                        <input type="checkbox" v-model="newItemHighPriority"> 
                        High Priority
                    </label>
                    
                    <p> {{ characterCount  }} </p>
                </form>
                <ul v-if="reverseArray.length">
                    <li class="todoList"
                        
                        :key="id" 
                        v-for="({ label, id, check, highPriority }, index) in reverseArray"
                        
                        :class="{complete: check, priority: highPriority}"
                    >
                        <span class="todo">
                            {{ label }}
                        </span> 
                        <span 
                            @click="completeTodo(reverseArray[index])"
                            class="done"> 
                            Mark as Done  
                        </span>

                        <span @click="removeItem(reverseArray[index])"> Remove from List </span>
                    </li>
                    <!-- <li class="todoList"
                        @click="completeTodo(todo)"
                        :key="id" 
                        v-for="(todo,  index) in todos"
                        
                        :class="{complete: todo.check, priority: todo.highPriority}"
                    >
                        <span class="todo">
                            {{ todo.label }}
                            {{ todo.check }}
                        </span> 
                        <span 
                            @click="removeTodo(index)" 
                            class="remove"> 
                            Remove 
                        </span>
                    </li> -->
                </ul>
                <h2 v-else> All the Task has been Completed</h2>
            </div>
            <h2 v-else> Todo App is Closed for now - click on the Open Button to add Todo</h2>
            
        </div>
    </div>
</template>





<style >
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

* {
    padding: 5px;
}
.reactive {
    margin-bottom: 20px;
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

.complete {
    text-decoration: line-through;
    color: #b8c2cc;
}

.priority {
    color: red;
    font-style: italic;
    font-weight: 800;
}

.complete.priority {
    color: red;
}


</style>