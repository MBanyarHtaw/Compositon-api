<template>
<div class="tagcloud">
  <h3>Tags</h3>
  <div v-for="tag in uniqueTags" :key="tag">
    <router-link :to="{name:'Tag',params:{tag}}">{{tag}}</router-link>
  </div>
</div>
</template>

<script>
import { ref } from 'vue'
export default {
props:["posts"],
setup(props){
  let tags =ref([]);
  props.posts.forEach((post)=>{
    post.tags.forEach((tag)=>{
      tags.value.push(tag)
    })
  })
  let uniqueTags = tags.value.filter((tag,index,array)=>{
    return array.indexOf(tag) === index;
  })
  return {uniqueTags}
}
}
</script>

<style>
.tagcloud{
  padding: 10px;
}
.tagcloud h3{
  border-bottom: 1px solid #eee;
  padding: 16px 8px;
  color:#444;
}
.tagcloud div{
  display:inline-block;
  padding: 10px;
}
.tagcloud a{
  color: #ccc;
  text-decoration: none;
}
.tagcloud a.router-link-active{
  color: #ff8800;
  font-weight: bold;
}
</style>