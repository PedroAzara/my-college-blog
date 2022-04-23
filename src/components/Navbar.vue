<template>
  <header>
      <h1>My College Blog</h1>
      <nav>
          <router-link :to="{name: 'Home'}">
              Home
          </router-link>
          <router-link :to="{name: 'Create'}">
              Create Post
          </router-link>
      </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style>
 header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
    margin: 0 0;
    padding: 10px;
    flex-wrap: wrap;
  }
  header h1 {
    color: #444;
    font-size: 48px;
    font-family: 'Secular One', sans-serif;

  }
  header a {
    color: #bbb;
    text-decoration: none;
    margin-left: 20px;
  }
  header a.router-link-active {
    color: #444;
    font-weight: bold;
  }
</style>