<template>
  <div class="my-border">
      <h1>Hírek</h1>
      <ul>
          <li
            v-for="(hir, index) in hirek"
            :key="`li${index}`"
          >
          <router-link
              :to="`/hirek/${hir.id}`"
            >
          {{hir.title}}
          </router-link>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    name: "Hirek",
    data(){
        return {
            hirek: []
        }
    },
    created(){
        let url = "http://localhost:3000/hirek"
        this.$http.get(url)
        .then(response => {
            this.hirek= response.data
            console.log(this.hirek);
        })
    }
}
</script>

<style>

</style>