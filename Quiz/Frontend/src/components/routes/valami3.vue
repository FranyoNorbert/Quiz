<template>
  <div class="my-border">
    <h1>{{hir.title}}</h1>
    <p>{{hir.content}}</p>
  </div>
</template>

<script>
export default {
  name: "HirOldal",
  data() {
    return {
      hir: {
        id: 1,
        title: "Hír 1",
        content: "lorem ...",
      },
    };
  },
  created() {
    this.FetchData();
  },
  watch: {
    //figyeli a változást és ha van, akkor újrahívja azt, amit kell
    //Ha a route változik, hívja meg a FetchData metódust:
    $route: "FetchData",
  },
  methods: {
    FetchData() {
      let id = this.$route.params.id;
      this.$http
        .get(`http://localhost:3000/hirek/${id}`)
        .then((res) => {
          this.hir = res.data;
        })
        .catch(this.HttpError);
    },
    HttpError() {
    //   console.log("szerver hiba");
    //   this.hir = {
    //     id: 0,
    //     title: "Szerver hiba",
    //     content: " Nem tud olvasni a szerverről ...",
    //   };
    //redirect
    this.$router.push('/404')
    },
  },
};
</script>

<style>
</style>