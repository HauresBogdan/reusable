<template>
  <nav class="header">

  <router-link to="/Calendar">Calendar</router-link> |
  <router-link to="/Heroes">DotaHeroes</router-link>
  
  <router-view/>

  </nav>
</template>

<style>
nav {
  display: block;
  height: 100px;
  background: lightblue;
}
</style>
