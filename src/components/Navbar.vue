<template>
  <!-- Just an image -->
<div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#"><img src="images/Hands-Chicken.png" width="30" height="30" class="d-inline-block align-top mb-2" alt=""></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <router-link class="nav-link" to="/">Home</router-link>
      </li>
      <!-- <li class="nav-item">
        <router-link class="nav-link" to="/#about">About</router-link>
      </li> -->
      <li class="nav-item">
        <router-link class="nav-link" to="/Food">Food</router-link>
      </li>
    </ul>
  </div>
</nav>
</div>
</template>

<script>
export default {
    name :'Navbar'
}
</script>

<style>

</style>