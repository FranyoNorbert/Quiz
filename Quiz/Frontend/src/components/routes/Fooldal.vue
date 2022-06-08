<template>
<div class="container mt-4">
  <!-- #region card -->
  <div class="row"> 
      <div class="col">
        <div class="card m-2" style="width: 18rem;" v-for="(quiz, index) in quizList" :key="index">
            <div class="card-body" >
                    <h5 class="card-title">{{quiz.quizName}}</h5>
                    <p class="card-title">{{quiz.Description}}</p>
                    <p class="card-footer">{{quiz.categoryName}} <br> {{quiz.created}}</p>
                    <router-link type="button" class="btn" style="background-color: #89d8d3; background-image: linear-gradient(315deg, #89d8d3 0%, #03c8a8 74%);" 
                    :to="`/quiz/${quiz.id}`">Start</router-link
        >
            </div>
        </div>
      </div>
  </div>
  <!-- #endregion card end -->

</div>
</template>

<script>
class Quiz {
    constructor(
        quizName = null,
        Description = null,
        created = null,
        categoryId = null
    ) {
        this.quizName = quizName;
        this.Description = Description;
        this.created = created;
        this.categoryId = categoryId;
    }
}
class Category {
    constructor(categoryName = null) {
        this.categoryName = categoryName;
    }
}
export default {
    name: "Fooldal",
    data() {
        return {
            state: "view",
            stateTitle: null,
            quizList: [],
            quiz: new Quiz(),
            category: new Category(),
            form: null,
        };
    },
    created() {
        this.getQuiz();
    },
    methods: {
        getQuiz() {
            let headers = new Headers();

            headers.append("Content-Type", "application/json");
            headers.append("Authorization", "Bearer " + this.$root.$data.token);
            const url = `${this.$loginServer}/api/quiz`;
            fetch(url, {
                method: "GET",
                headers: headers,
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Success:", data.data);
                    this.quizList = data.data;
                })
                .catch((error) => {
                    console.error("Error:", error);
                    this.quizList = [];
                });
        },
    },
};
</script>

<style>
.card {
    text-align: center;
    color: white;
}
.card {display:inline-block;
        background: #0ca491;
}
</style>