<template>
  <div class="list">
    <MyItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
    ></MyItem>
  </div>
</template>

<script>
import MyItem from "./MyItem";

export default {
  name: "MyList",
  components: {
    MyItem,
  },
  props: ["todos"],
};
</script>

<style>
</style>