<template>
  <NavE><HelloWorld/></NavE>
<div class="home">
  <NavBar/>
</div>
  
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
import { defineComponent } from 'vue';

// Components
import NavE from '../components/NavE.vue';


export default defineComponent({
  name: 'homeV',
  components: {
    HelloWorld,
    NavE
}
})
</script>

