<template>
<div class="container">
  <card-view v-for="post in posts" :key="post">
      <template #header>
          <img class="rounded-circle" :src="post.userImageURL" alt="" width="90">
          <h4 class="ms-3">{{post.user}}</h4>
          
      </template>
      <template #body>
          <img  class="w-100" :src="post.largeImageURL" alt="" width="647">
      </template>
      <template #footer>
        <h4>{{post.likes}} likes</h4>
        <h4>{{post.comments}} comments</h4>
        <h4>{{post.views}} views</h4>
      </template>
  </card-view>
</div>
</template>

<script>
import http from '../axios-http'
  export default {

    data(){
      return{
        posts:[],

      }
    },
    methods:{
      getPost(){
        http.get(process.env.VUE_APP_API_KEY).then(response =>{
          this.posts=response.data.hits;
        })
      }
    },
    mounted(){
      this.getPost();
    }
  }
</script>
