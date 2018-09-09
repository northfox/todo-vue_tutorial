<template>
  <div class="hello">
    <h1>Hoge</h1>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'Hoge',
  data () {
    return {
      msg: 'Hogehoge'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
