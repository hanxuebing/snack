<script setup>
import '@snack/vue3lib/dist/style.css'
import { onMounted } from 'vue'
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import { getHeroName } from '@/api/hero'
import { BundleCalendar, BundleFileUpload as fileUpload } from '@snack/vue3lib'
onMounted(async() => {
  // const result = await getHeroName()
  // console.log(result.data)
})
</script>

<template>
  <header>
    <!-- <cp-button></cp-button> -->
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div> -->
  </header>
    <div class="calendar-bg">
      <BundleCalendar></BundleCalendar>
    </div>
    <file-upload></file-upload>
    <cp-button></cp-button>
    <cp-input></cp-input>
  <!-- <RouterView /> -->
</template>

<style scoped>
.calendar-bg {
  width: 368px;
  background-color: #11151ecc;
  backdrop-filter: blur(2.5px);
}
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
