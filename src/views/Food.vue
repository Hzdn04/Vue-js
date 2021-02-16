<template>
    <div class="container">
        <Navbar />
        <div class="row mt-3 justify-content-center">
            <div class="col-md-8">
                <h1 class="text-center">Search Foodis</h1>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Foods" id="search-input">
                    <div class="input-group-append">
                        <button class="btn btn-outline-primary" type="button" id="btn-search">Search</button>
                    </div>
                </div>
            </div>
        </div>
        <hr>
    <div class="row mb-3 ml-5">
        <div class="col-md-3 mt-4 mr-5" v-for="menu in menus" :key="menu.id">
            <Card :menu="menu"/>
        </div>
    </div>
         <Footer/>
    </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Card from '@/components/Card.vue'
import Footer from '@/components/Footer.vue'
import axios from 'axios'

export default {
  name: 'Food',
  components: {
    Navbar,
    Card,
    Footer
  },
  data(){
      return{
          menus:[]
      }
  },
  metods:{
      setmenu(data) {
          this.menus = data
      }
  },
  async mounted(){
      const response = await axios.get("http://localhost:3000/menu")
      this.menus = response.data
  }

}


</script>

<style>
    
    
</style>