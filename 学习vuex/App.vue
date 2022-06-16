<template>
  <div id="root">
    <Count />
    <hr />
    <br />
    <Person />
  </div>
</template>

<script>
import Count from "./components/Count";
import Person from "./components/Person";
export default {
  name: "App",
  components: {
    Count,
    Person,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
