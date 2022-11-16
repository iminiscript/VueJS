<template>
    <div class="box">
        <div class="boxChild" 
            :style="{borderColor: boxA ? 'red' : '' }"
            @click="borderClick('A')"
            >
        </div>
        
        <div
            @click="borderClick('B')" 
            :class="['boxChild',  { active: boxB }]"
        >
        </div>
        
        <div 
            class="boxChild" 
            :class="boxC ? 'active' : '' "
            @click="borderClick('C')"
        >
        </div>
        
        <div class="boxChild"
            :class="boxDClass"
            @click="borderClick('D')"
        >
        </div>
        
        <div :class="{ boxChild: true, active: boxE }"
            @click="borderClick('E')"
        >
        </div>
    </div>
</template>

<script>
export default {
    name: 'Dynamic Classess',
    data() {
        return {
            boxA: false,
            boxB: false,
            boxC: false,
            boxD: false,
            boxE: false,
        }
    },

    methods: {
        borderClick(box) {
            console.log("🚀 ~ file: 16Nov.vue ~ line 25 ~ borderClick ~ box", box)
            if(box === 'C') {
                this.boxC = !this.boxC;
            } 
            else if (box === 'D') {
                this.boxD = !this.boxD;
            } 
            else if (box === 'E')  {
                this.boxE = !this.boxE;
            } 
            else if (box === 'A')  {
                this.boxA = !this.boxA;
            } 
            else if (box === 'B')  {
                this.boxB = !this.boxB;
            }
        }
    },

    computed: {
        boxDClass() {
            return { active: this.boxD } 
        }
    },
}
</script>

<style>
@media (min-width: 1024px) {
  .box {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .boxChild {
    width: 200px;
    height: 200px;
    border: 3px dashed;
    cursor: pointer;
  }

  .active {
    border-color: red;
  }
}
</style>