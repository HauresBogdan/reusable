<template>
  <AppHeader />  
</template>

<script>
import AppHeader from "./components/AppHeader";
export default {
  name: "App",
  components: {
    AppHeader, 
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.container {
  display: flex;
  flex-direction: column;

  align-items: center;
}

ul {
  list-style-type: none;
}
</style>
