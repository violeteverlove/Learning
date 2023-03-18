<template>
  <div>
    <h2>学校名称:{{ name }}</h2>
    <h2>学校地址:{{ address }}</h2>
    <button @click="sendSchoolName">把学校名给App</button>
    <button @click="unbind">解绑自定义事件</button>
  </div>
</template>


<script>
export default {
  name: "School",
  data() {
    return {
      name: "高级中学",
      address: "惠州",
    };
  },
  methods: {
    sendSchoolName() {
      //触发school组件上的childtofather事件
      this.$emit("childtofather", this.name);
      // this.$emit('demo')
    },
    unbind(){
      this.$off('childtofather')//单个自定义事件
      // this.$off(['childtofather','demo'])//解绑多个自定义事件
      // this.$off()//所有的
      
    }
  },
};
</script>

