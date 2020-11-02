<template>
  <h1>Dota Heroes {{ heroesCount }}</h1>

  <ul>
    <li v-for="hero in dotaList" :key="hero.name">{{ hero.name }}</li>
  </ul>

  <h2>{{ fName }}{{ lName }}</h2>
  <h2>{{ fullName }}</h2>
  <p>{{ RandA }}</p>
  <p>{{ RandA }}</p>
  <p>{{ RandA }}</p>
  <p>{{ RandB }}</p>
  <p>{{ RandB }}</p>
  <p>{{ RandCMethod() }}</p>
  <p>{{ RandCMethod() }}</p>
  <p>{{ RandCMethod() }}</p>
  <button @click="setFullName">Set fullName</button>

  <form action="submit" @submit.prevent="addHeroFunction">
    <input type="text" v-model="addHero" placeholder="add hero" />
    <button type="submit">Add Hero</button>
  </form>
</template>

<script>
export default {
  name: "App",
  components: {},
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
        this.dotaList.unshift({ name: this.addHero });
        this.addHero = "";
      }
    },
    setFullName() {
      this.fullName = 'mamamia';
    },
    RandCMethod() {
      return Math.random();
    },
  },
  computed: {
    heroesCount() {
      return this.dotaList.length;
    },
    RandA() {
      return Math.random();
    },
    RandB() {
      return Math.random();
    },
    fullName: {
      get() {
        return `${this.fName} ${this.lName}`;
      },
      set(fullName) {
        const nameArr = fullName.split(" ");
        this.fName = nameArr[0];
        this.lName = nameArr[1];
      }
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>
