import { defineStore } from "pinia";

// import products  from '@/data/product.json'

export const useProductStore = defineStore( 'productStore',  {
    state: () => {
        return {
            products: []
        }
    },

    actions: {
       async fill() {
            this.products =  (await import("@/data/product.json")).default;
        },
    },
})