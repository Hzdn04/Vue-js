<template>
<div class="card" style="width: 18rem;">
  <img :src=" 'images/'+menu.gambar" class="card-img-top">
  <div class="card-body">
    <h5 class="card-title">{{ menu.nama }}</h5>
    <p class="card-text">Rp.{{ menu.harga }}</p>
    <p class="card-text">{{ menu.deskripsi }}.</p>
    <a href="#" class="btn btn-primary">Order</a>
  </div>
</div>
</template>

<script>
export default {
  name:'Card',
  props:['menu']
}
</script>

<style>
  .card img{
    height: 200px;
  }
</style> 