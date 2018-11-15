<template lang="html">
  <div class="wordlist-container">
    <h2>My Stored Words:</h2>
    <div class="wordlist-columns">
      <div class="wordlist">
        <ul>
          <li v-for="(word, index) in words" :key="index">
            <router-link :to="{ name: 'Word', params: { id: word.headword, word: word.headword, data:word } }" v-text="word.headword"></router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'WordList',
  computed: {
    words () {
      return this.$store.state.words.slice().reverse()
    }
  }
}
</script>

<style lang="scss" scoped>
.items {
  .item {
    background: #e0ddd5;
    color: #171e42;
    box-sizing: border-box;
    padding: 10px;
  }
}

.wordlist-container{
  margin-top: 60px;

  .wordlist-columns{
    width: 100%;
    display: flex;
    margin: 0 auto;
    text-align: left;
    align-items: center;

    h2{
        flex: 0 0 15%;
        margin-top: 10px;
        text-align: center;
    }

    .wordlist {
      overflow: auto;
      width: 100%;

      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        height: calc(100vh-84px);
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        li {
          text-align:  center;
          background: cadetblue;
          padding: 10px;
          margin: 5px;
          flex: 1 0 auto;
          box-sizing: border-box;
          padding: 10px;
          margin-top: 10px;
          width: 250px;

          a {
            color: white;
            text-decoration: none;
          }
        }
      }
    }
  }
}

</style>
