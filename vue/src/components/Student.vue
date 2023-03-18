<template>
  <div>
    <h2>学生姓名:{{ name }}</h2>
    <h2>学生年龄:{{ age }}</h2>
    <button @click="sendStudentName">把学校名给App</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "张三",
      age: 18,
    };
  },
   methods: {
    sendStudentName() {
      //触发school组件上的childtofather事件
      this.$emit("chitofat", this.name);
    },
  },
};
</script>

<style>
</style>