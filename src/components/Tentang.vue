<template>
  <section class="about section" id="about">
        <h2 class="section-title">
            About
        </h2>
        <div class="about__container bd-grid">
            <div class="about__img">
                <img src="images/food.png" alt="">
            </div>
            <div>
                <h2 class="about__subtitle mb-2">The Resto'</h2>
                <p class="about__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, officia deleniti qui nesciunt commodi animi perferendis nisi. Numquam iusto aliquid nam dicta perferendis nisi nostrum vitae delectus, repellendus corrupti ex.</p>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name : 'Tentang'
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
.section-title{
    position: relative;
    font-size: 600;
    color: rgb(45, 99, 182);
    margin-top: 2px;
    margin-bottom: 2px;
    margin-left: -60px;
    text-align: center;
}

.section-title::after{
    position: absolute;
    content: "";
    width: 64px;
    height: 0.18rem;
    left: 0;
    right: 0;
    margin: auto;
    top: 2rem;
    background-color: var(--first-color);
}
.section{
    padding-top: 3rem;
    padding-bottom: 2rem;
}
.about__container{
    row-gap: 2rem;
    text-align: center;
}
.about__subtitle{
    margin-bottom: var(--mb-2);
}
.about__img{
    justify-self: center;
}
.about__img img{
    width: 500px;
    border-radius: .5rem;
}
</style>