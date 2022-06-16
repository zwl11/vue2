<template>
  <div>
    <input type="text" v-model="meg" /><button @click="add">添加</button>
    <ul>
      <li v-for="item in list" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import store from "@/store";
export default {
  name: "Person",
  data() {
    return {
      meg: "",
    };
  },
  methods: {
    add() {
      store.commit("personAbout/addPerson", this.meg);
    },
  },
  computed: {
    list() {
      return store.state.personAbout.PersonList;
    },
  },
};
</script>

<style>
</style>