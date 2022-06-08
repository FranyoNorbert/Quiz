<template>
    <div class="container">
        <h1>Quiz</h1>
        <div class="row">
            <div class="col">
                <div
                    class="card m-2"
                    style="width: 18rem"
                    v-for="(q, index) in questionAndChoice"
                    :key="index">
                    <div class="card-body">
                        <h5 class="card-title">
                            KérdésId: {{ q.questionId }} <br />
                            Kérdés: {{ q.question }}
                        </h5>
                        <p class="card-title">{{ q.quizId }}</p>

                        <!-- <p>{{questionAndChoice.response}}</p> -->
                        <div class="form-check"
                        v-for="(r, ir) in q.response"
                        :key="`${q.quizId}.${ir}`"
                        >
                            <input
                                class="form-check-input"
                                type="radio"
                                
                                :name="`r${index}`"
                                :id="`id${index}`"
                                @click="select()" />
                            <label
                                class="form-check-label"
                                for="`id${index}`">
                                {{ r.choice }}
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


class QuestionsAndChoices {
    constructor(
        quizId = null,
        questionId = null,
        question = null,
        quizName = null,
        Description = null,
        created = null,
        categoryId = null
        
    ) {
        this.quizId = quizId;
        this.questionId = questionId;
        this.question = question;
        this.quizName = quizName;
        this.Description = Description;
        this.created = created;
        this.categoryId = categoryId;
        this.response = [];
    }
}
export default {
    name: "Quiz",
    data() {
        return {
            state: "view",
            stateTitle: null,
            questionAndChoice: [],
            form: null,
            load: null
        };
    },
    created() {
        this.getQuestionAndQuiz();
        
    
    },
    watch:{
        questionAndChoice(){

            console.log("heló");
        }
    },
    methods: {
        getQuestionAndQuiz() {
            let headers = new Headers();

            let id = this.$route.params.id;
            console.log(id);
            headers.append("Content-Type", "application/json");
            headers.append("Authorization", "Bearer " + this.$root.$data.token);
            const url = `${this.$loginServer}/api/getQuestionAndQuiz/${id}`;
            fetch(url, {
                method: "GET",
                headers: headers,
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Success:", data.data);
                    this.questionAndChoice = data.data;
                    this.getChoiceByQuestionId();
                    
                    
                })
                .catch((error) => {
                    console.error("Error:", error);
                    this.questionAndChoice = new QuestionsAndChoices();
                });
        },
        getChoiceByQuestionId() {
            this.questionAndChoice.forEach((element) => {
                let headers = new Headers();

                let id = element.questionId;
                element.load = true;

                headers.append("Content-Type", "application/json");
                headers.append(
                    "Authorization",
                    "Bearer " + this.$root.$data.token
                );
                const url = `${this.$loginServer}/api/getChoiceByQuestionId/${id}`;
                fetch(url, {
                    method: "GET",
                    headers: headers,
                })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log("Success:", data.data);
                        element.response = data.data;
                        this.load = true;
                    })
                    .catch((error) => {
                        console.error("Error:", error);
                        element.response = [];
                    });
            });
            
        },
    },
};
</script>

<style>
</style>