<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Fundamental Topics</template>
   <ul>
    <li>Vue CLI</li>
    <li>Componets
      <ul>
        <li>Single File Component</li>
        <li>Component Registratoion</li>
        <li>Props</li>
        <li>Events</li>
        <li>Attributes</li>
      </ul>
    </li>
    <li>Templates</li>
    <li>Directives</li>
    <li>API Styles
      <ul>
        <li>Options API</li>
        <li>Composition API -  Basic</li>
      </ul>
    </li>
    <li>App Configurations</li>
    <li>Rendering List</li>
    <li>Conditional Rendering</li>

   </ul>
    
  </WelcomeItem>

  
</template>
