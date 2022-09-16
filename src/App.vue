<template>
  <nav class='bg-primary p-2 d-flex justify-content-between sticky-top'>
    <div class="home">
      <router-link class="face text-white ms-4  font-italic " to="/">lifestyle</router-link> 
      <router-link class="text-white ms-4  " to="/"><fa icon="home" class=""/></router-link> 
      <router-link class="text-white ms-4   p-1" to="/friends"><fa icon="users" class=""/></router-link> 
      <router-link class="text-white ms-4   p-1" to="/bell"><fa icon="bell" class=""/></router-link> 
    </div>
    <form class="form-inline my-2 d-flex">
      <input class=" p-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-primary" >Search</button>
    </form>
    <router-link class="text-white me-4 " to="/about"><fa icon="user"/></router-link>
  </nav>
  
  
  <router-view/>
</template>

<style>

nav a {
  font-weight: bold;
  font-size: 25px;
  color: #387cc0;
  text-decoration: none;
  
}

nav a.router-link-exact-active {
  color: #0d7f46;
}
.face{
  font-size: 40px;
  font-style: italic;
  
}
</style>
