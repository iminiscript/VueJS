<script setup>
  import { RouterLink, RouterView } from 'vue-router' 
  import HelloWorld from './components/HelloWorld.vue'
  import HomeView from './views/HomeView.vue'
</script>

<template>
  <header>
  
    <div class="header__left">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
      <HelloWorld msg="VueJS Practice" />
    </div>
     <div class="header__right">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/nov_14_15">Nov 14-15</RouterLink>
        <RouterLink to="/nov_16">Nov 16 </RouterLink> 
        <RouterLink to="/nov_17">Nov 17</RouterLink>
        <RouterLink to="/nov_18">Nov 18</RouterLink>
        <RouterLink to="/nov_21">Nov 21</RouterLink>
      </div>
  </header>

  <RouterView /> 

</template>

<style>
header {
  line-height: 1.5;
  padding: 2rem;
  border-bottom: 1px solid;
  margin-bottom: 2rem;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}
.header__right {
  display: flex;
  align-items: center;
}

.header__right a {
  margin-left: 1rem;
  font-size: 1rem;
  font-weight: 400;
}
.header__right a.active {
  font-weight: 800;
  text-decoration: underline;
}
.header__left {
  display: flex;
}

.greetings {
  margin-left: 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}

button {
    padding: 12px;
    background-color: chartreuse;
    border: 1px solid chartreuse;
    margin-left: 20px;
    cursor: pointer;
}
button:first-of-type {
  margin-left: 0;
}
</style>
