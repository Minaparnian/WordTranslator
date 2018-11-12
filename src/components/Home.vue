<template>
  <div class="home">
    <div class="input-container">
      <div class="input-group">
        <input type="text" v-model="word">
        <button @click="getWord" type="submit">Add Word</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: () => ({
    word: ''
  }),
  methods: {
    getWord (e) {
      alert(this.word)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.home {
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh);
  .input-container {
    max-width: 500px;
    width: 100%;
    .input-group {
      display: flex;
      justify-content: space-between;
      input {
        box-sizing: border-box;
        width: calc(100% - 150px);
        padding: .5rem;
        border: 2px solid cornflowerblue;
        font-size: 1rem;
        border-radius: 0;
        -webkit-appearance: none;
      }
      button {
        width: 150px;
        height: 50px;
        -webkit-appearance: none;
        background: cornflowerblue;
        color: #fff;
        text-transform: uppercase;
        border: none;
        font-weight: bold;
        font-size: 12pt;
      }
    }
  }
}

</style>
