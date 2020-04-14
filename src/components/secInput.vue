<template>
  <div>
      
       <input class="input" :value="value" @input="handleInput" placeholder="请输入任务"/>
  </div>
</template>

<script>
  export default {
    props: {
    // value属性
    value: {
      type: String
    }
  },
    name: 'myInput',
    data() {
      return {
      }
    },
    methods: {
     handleInput(e) {
      // 触发input事件
      //console.log( e.target.value)
      this.$emit("input", e.target.value);
    }
  }
  }
</script>
<style scoped>
.input{
  border-color: red;
  margin: 0 10px;
}</style>