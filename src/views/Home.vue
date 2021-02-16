<template>
  <div class="container">
    <Navbar />
    <div class="container">
       <section class="home bd-grid" id="home">
        <div class="home__data">
            <h1 class="home__title">Hi, <br>You Can <span class="home__title-color">Order</span><br> To Stomach</h1>
            <a href="#contact" class="btn btn-primary mt-4">Contact</a>
        </div>

        <div class="home__social">
            <a href="#" class="home__social-icon"><i class='bx bxl-linkedin'></i></a>
            <a href="#" class="home__social-icon"><i class='bx bxl-github' ></i></a>
            <a href="#" class="home__social-icon"><i class='bx bxl-behance' ></i></a>
        </div>
        <div class="home__img">
            <img src="images/food.png" alt="food">
        </div>
    </section>
        <Tentang/>        
    </div>
     <Footer/>
  </div>
  
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import Tentang from '@/components/Tentang.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Tentang,  
    Footer
  }
}
</script>

<style>
  .bd-grid{
    max-width: 1024px;
    display: grid;
    grid-template-columns: 100%;
    grid-column-gap: 2rem;
    width: calc(100% - 2rem);
    margin-left: 2px;
    margin-right: 2px;
}

.home{
    height: calc(100vh - 3rem);
    row-gap: 1rem;
}
.home__data{
    align-self: center;
}
.home__title{
    margin-top: 7px;
    margin-bottom: 5px;
}
.home__title-color{
    color: var(--first-color);
}
.home__social{
    display: flex;
    flex-direction: column;
}
.home_social-icon{
    width: max-content;
    margin-bottom: var(--mb-2);
    font-size: 1.5rem;
    color: var(--second-color);
}
.home__social-icon:hover{
    color: var(--first-color);
}
.home__img{
    position: absolute;
    padding-top: 70px;
    padding-left: 650px;
    width: 255px;
    height: 250px;
}

</style>