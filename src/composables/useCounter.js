import { ref } from "vue";

function useCounter(intialValue = 0, stepValue = 1) {
    const count = ref(intialValue);
    function incrimentCount () {
        count.value += stepValue
    }

    return {
        count,
        incrimentCount
    }
    

}
export default useCounter;