<template>
  <h1>Post list</h1>
 <div v-for="post in posts" :key="post.id">
    <Singlepost :post="post"></Singlepost>
 </div>
</template>

<script>
import Singlepost from './Singlepost'
export default {
  components: { Singlepost },
    props:["posts"],
    setup(props){
        
    }
}
</script>

<style>

</style>