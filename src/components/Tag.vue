<template>
  <div class="tag">
    <div v-if="error">{{error}}</div>
  <div v-if="posts.length" class="layout">
    <div>
      <PostLists :posts="filteredPosts"></PostLists>
    </div>
    <div>
      <TagsCloud :posts="posts"></TagsCloud>
    </div>
  </div>
  </div>
</template>

<script>
import TagsCloud from './TagsCloud'
import PostLists from './PostLists'
import { computed } from 'vue';
import getPosts from "../composible/getPosts"
export default {
  components: {
    TagsCloud, PostLists },
props:["tag"],
setup(props){
    let {posts,error,load} =getPosts();
    load();
    let filteredPosts =computed(()=>{
        return posts.value.filter((post)=>{
            return post.tags.includes(props.tag)
        })
    })
    return {posts,error,filteredPosts}
}
}
</script>

<style>
.tag{
  max-width: 1200px;
  margin: 0 auto;
}
</style>