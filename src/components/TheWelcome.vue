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
    <li><strike> Vue CLI</strike></li>
    <li><strike> Componets</strike>
      <ul>
        <li><strike>Single File Component</strike></li>
        <li><strike>Component Registratoion</strike></li>
        <li><strike>Props</strike></li>
        <li>Events</li>
        <li>Attributes</li>
      </ul>
    </li>
    <li>Templates</li>
    <li><strike>Directives</strike></li>
    <li>API Styles
      <ul>
        <li><strike>Options API</strike></li>
        <li>Composition API -  Basic</li>
      </ul>
    </li>
    <li>App Configurations</li>
    <li><strike>Rendering List</strike></li>
    <li><strike> Conditional Rendering</strike></li>

   </ul>
    
  </WelcomeItem>

  
</template>
