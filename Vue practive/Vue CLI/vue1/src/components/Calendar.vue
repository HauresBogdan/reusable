<template>
  <h1>Calendar</h1>
  <br>
  <div class="calendar">
    <div class="currentM-Y">
      <p class="first">{{ currentMonthName }}</p>
      <p class="last">{{ currentYear }}</p>
    </div>

    <section class="days">
      <p v-for="day in days" v-bind:key="day">{{ day }}</p>
      <p v-for="(emptyDays,i) in startDay(currentYear,currentMonth)" :key="i"></p>
      <p v-for="monthDay in daysInMonth()" :key="monthDay">{{ monthDay }}</p>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentMonth: new Date().getMonth() + 1,
      currentMonthName: new Date().toLocaleString("default", { month: "long" }),
      currentYear: new Date().getFullYear(),
      days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Friday", "Saturday"],
    };
  },
  methods: {
      daysInMonth() {   
          return  new Date(this.currentYear,this.currentMonth,0).getDate();
      },
      startDay(year,month) {
          return  new Date(year,month-1,1).getDay();
      }

  }
};
</script>

<style scoped>
h1 {
  text-align: center;
}
.calendar {
  max-width: 400px;
  margin: 30px auto;
}
.days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
}

.currentM-Y {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 0;
  grid-template-areas: "first 0 0 0 0 0  last";
}

.first {
  grid-area: first;
}
.last {
  grid-area: last;
}
</style>
