<template>
  <div class="">
    <div class="container">
      <h1>Dota Heroes {{ heroesCount }}</h1>

      <ul>
        <li v-for="(hero, index) in dotaList" :key="hero.name">{{ hero.name }}<button @click="removeHero(index)">x</button><br /><input type="text" /></li>
      </ul>

      <form action="submit" @submit.prevent="addHeroFunction">
        <input type="text" v-model="addHero" placeholder="add hero" />
        <button type="submit">Add Hero</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fName: "Haures",
      lName: "Bogdan",
      addHero: "",
      dotaList: [{ name: "Cristal Maiden" }, { name: "Pudge" }, { name: "Phantom  Assasin" }],
    };
  },
  methods: {
    addHeroFunction() {
      if (this.addHero !== "") {
        this.dotaList.push({ name: this.addHero });
        this.addHero = "";
      }
    },
    removeHero(index) {
      this.dotaList = this.dotaList.filter((hero, i) => index !== i);
    },
  },
  computed: {
    heroesCount() {
      return this.dotaList.length;
    },
  },
};
</script>
