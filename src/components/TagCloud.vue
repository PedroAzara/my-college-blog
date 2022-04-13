<template>
  <div class="tag-cloud">
    <h3>Tags: </h3>
    <div v-for="tag in tags" :key="tag">
      <router-link :to="{ name: 'Tags', params: { tag }}">
        #{{tag}}
      </router-link>
    </div>
  </div>
</template>

<script>
import useTags from '../composables/useTags'

export default {
  setup(props) {
    const { tags } = useTags(props.posts)

    return { tags }
  },
  props: ['posts']
}
</script>

<style>
  .tag-cloud {
    padding: 10px;
  }
  .tag-cloud h3 {
    border-bottom: 1px solid #eee;
    padding: 16px 8px;
    color: #34495E;
  }
  .tag-cloud div {
    display: inline-block;
    padding: 10px;
  }
  .tag-cloud a {
    color: rgb(167, 167, 167);
    text-decoration: none;
  }
  .tag-cloud a.router-link-active {
    color: #34495E;
    font-weight: bold;
  }
</style>