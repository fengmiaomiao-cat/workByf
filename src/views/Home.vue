<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div class="box">
      <fristInput :value="inputValue" @input="handle1"></fristInput>
      <secInput :value="inputValue" @input="handle2"></secInput>
      <secInput :value="inputValue" @change="handle2"></secInput>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import fristInput from '@/components/fristInput.vue'
import secInput from '@/components/secInput.vue'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    HelloWorld,
    fristInput,
    secInput
  },
  data() {
    return {
      
    }
  },
  computed: {
    ...mapState(['inputValue'])
  },
  methods:{
    handle1(e){
     //console.log(e)
      this.$store.commit('setInputValue', e)
    },
    handle2(e){
      this.$store.commit('setInputValue', e)
    }
  }
}
</script>
<style scoped>
.box{
  display:flex;
  justify-content: center;
  align-items: center;
}
</style>
