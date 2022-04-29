
<template>

    <div class="my-border p-3">
        <h1>Register</h1>
        <div class="mb-3">
            <label for="firstName" class="form-label">Frist Name</label>
            <input
                type="firstName"
                class="form-control"
                id="firstName"
                v-model="registerData.firstName" />
        </div>
        <div class="mb-3">
            <label for="lastName" class="form-label">Last Name</label>
            <input
                type="lastName"
                class="form-control"
                id="lastName"
                v-model="registerData.lastName" />
        </div>
        

        <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input
                type="email"
                class="form-control"
                id="email"
                v-model="registerData.email" />
        </div>
        <div class="mb-3 row">
            <label for="password" class="form-label">Password</label>
            <div class="col-sm-10">
                <input
                    type="password"
                    class="form-control"
                    id="password"
                    v-model="registerData.password" />
            </div>
        </div>
        <button type="button" class="btn btn-primary" @click="onClickRegister()">
            Register
        </button>
        <div>
            <textarea
                name=""
                id=""
                cols="85"
                rows="5"
                v-model="registerResponse.token"></textarea>
        </div>
    </div>
    
</template>

<script>

export default {
    name: "Register",
    data() {
        return {
            registerData: {
                firstName: "",
                lastName: "",
                gender: "",
                email: "",
                password: "",
                phoneNumber: "",
                access: 1

            },
            registerResponse: {
                success: 0,
                message: "",
                token: null,
            },
            noSuccess: false,

        };
    },
    methods: {
        onClickRegister() {
            const url = `${this.$registerServer}/api/users/register`;
            let headers = new Headers();
            headers.append("Content-Type", "application/json");
            console.log(this.registerData);
            fetch(url, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(this.registerData),

            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Success:", data);
                    this.registerResponse = data;
                    // this.$root.$data.token = data.token;
                    this.$root.$data.firstName = data.firstName;
                    this.$root.$data.lastName = data.lastName;
                    this.$root.$data.gender = "";
                    this.$root.$data.email = data.email;
                    this.$root.$data.password = data.password;
                    this.$root.$data.phoneNumber = "";
                    this.$root.$data.access = 1;
                    if (data.success) {
                        this.$router.push({ path: "/login" });
                    } else {
                        this.noSuccess = true;
                        setTimeout(() => {
                            this.noSuccess = false;
                        }, 2000);
                    }
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        },
    },
};
</script>

<style>
</style>