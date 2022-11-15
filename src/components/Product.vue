<!-- 
<script setup>
import cartIcon from '../assets/cart.svg'
</script>  -->
<template>
    <div class="c-product">
        <div class="c-cart">Cart {{ cartItem }} <img alt="Vue logo" class="c-cartLogo" src="@/assets/cart.svg" width="25" height="25" /> </div>
        <div class="c-productLeft c-productItem">
            <img class="c-productImg" :src="img" alt=" "/>
        </div>
        <div class="c-productRight c-productItem">
            <h2 class="c-productTitle"> {{ title }} </h2>
            <h3 class="c-productStock" v-if="inStock"> In Stock </h3>
            <h3 class="c-productStock oos" v-else> Out Of Stock</h3>
            <ul class="c-productFeature">
                <li v-for="detail in details"> 
                    {{ detail }}
                </li>
            </ul>

            <div class="c-productVaraint">
                <div v-for="(variant, index) in variants"
                     :key="variant.id" 
                     :data-key="variant.id"  
                     @click="selectVariant(index)"
                     @mouseover="toolTip(variant.image)" 
                     class="c-productVarinatColor" 
                     :style="{ backgroundColor:variant.color }">
                     <span class="c-productVaraintHover">
                        <img :src="imgHover" />
                    </span> 
                </div>
            </div>
            <button :disabled="!inStock" class="c-btn"  @click="addToCart()">
                Add to Cart
            </button>
        
        </div>
    </div>
</template>

<script>
export default {
    name: 'product',
    data() {
        return {
            productType: "Socks Medium",
            brand: "Jogger",
            cartItem: 0,
            selectedVariant: 0,
            imgHover: '/src/assets/socks_green.jpeg',
            details: ["70% cotton", "20% poluster", "10% Nylon", "Super Soft", "Regular length"],
            variants: [
                { id: 2234, color: '#288f5a', image: '/src/assets/socks_green.jpeg', quantity: 5 },
                { id: 2235, color: '#1b2e47', image: '/src/assets/socks_blue.jpeg', quantity: 0 },
            ],
        }
    },
    methods: {
        selectVariant(index) {
            this.selectedVariant = index;
        },

        addToCart() {
            this.variants[this.selectedVariant].quantity--
            this.cartItem++
        }, 

         toolTip(variantImg) {
            return this.imgHover = variantImg;
        }
    },
    computed: {
        title() {
            return this.productType + ' ' +  this.brand;
        }, 

        img() {
            return this.variants[this.selectedVariant].image
        }, 
        inStock() {
            return this.variants[this.selectedVariant].quantity
        }

    },
}

</script>

<style  scoped>

.c-productTitle {
    font-size: 24px;
    font-weight: 800;
}

.c-productStock {
    font-size: 20px;
    color: #4CAF50;
    font-weight: 800;
    margin: 20px 0;
}

.c-productStock.oos {
    color: #f40a0a;
}

.c-product {
    display: flex;
    width: 800px;
    margin: 100px auto;
    justify-content: space-between;
    position: relative;
}

.c-cart {
    position: absolute;
    right: 0;
    top: -100px;
    background-color: rgb(98, 189, 105);
    width: 100px;
    text-align: center;
    padding: 10px 10px;
    color: aliceblue;
}

.c-cartLogo {
    position: relative;
    top: 5px;
}

.c-productItem {
    width: 45%;
}

.c-productImg {
    max-width: 400px;
}

.c-productVaraint {
    display: flex;
}

.c-productVarinatColor {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid black;
    margin:  20px;
    cursor: pointer;
    position: relative;
}

.c-productVaraintHover {
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: aliceblue;
    border: 1px solid;
    top: 50px;
    visibility: hidden;
    z-index: -1;
}

.c-productVarinatColor:hover .c-productVaraintHover {
    visibility: visible;
    z-index: 1;
}

.c-btn {
    width: 200px;
    padding: 10px 20px;
    color: aliceblue;
    background-color: #4CAF50;
    text-align: center;
    margin-top: 40px;
    cursor: pointer;
    border: 1px solid #4CAF50;
}

button:disabled {
    opacity: 0.5;
    cursor: not-allowed;

}

</style>