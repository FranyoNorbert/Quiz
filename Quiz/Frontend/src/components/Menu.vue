<template>
    <div class="my-border">
        <!-- 5. Cserélkük le a lineket: a -> router-link, href -> to, link -> route (útvonal) -->

        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link
                                class="nav-link active"
                                aria-current="page"
                                to="/"
                                style="color: white"
                                >Főoldal</router-link
                            >
                        </li>
                         
                        
                        

                        <!--#region login -->
                        <li class="nav-item dropdown" v-if="loggedIn()">
                            <a
                                class="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                style="color: white"
                                >
                                {{ $root.$data.user.lastName }}
                            </a>
                            <ul
                                class="dropdown-menu"
                                aria-labelledby="navbarDropdown">
                                <li @click.prevent="onClicklogout()">
                                    <router-link
                                        class="dropdown-item"
                                        to="/login"
                                        style="color: white"
                                        >Logout</router-link
                                    >
                                </li>
                                <li>
                                    <router-link
                                        class="dropdown-item"
                                        to="/profile"
                                        style="color: white"
                                        >Profil</router-link
                                    >
                                </li>
                            </ul>
                        </li>
                        <!--#endregion login -->
                        <li class="nav-item">
                            <router-link
                                class="nav-link"
                                to="/login"
                                style="color: white"
                                v-if="!loggedIn()"
                                >Login</router-link
                            >
                        </li>
                    </ul>
                    <form class="d-flex">
                        <input
                            class="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search" />
                        <button class="btn " style="background-color: #89d8d3;
background-image: linear-gradient(315deg, #89d8d3 0%, #03c8a8 74%);" type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
class User {
    constructor(
        firstName = null,
        lastName = null,
        gender = null,
        email = null,
        number = null
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.email = email;
        this.number = number;
    }
}
class Category {
    constructor(categoryName = null) {
        this.categoryName = categoryName;
    }
}

export default {
    name: "Menu",
    data(){
        return {
            categoryList: [],
            category: new Category()
        }
    },
    methods: {
        loggedIn() {
            return Boolean(this.$root.$data.token);
        },
        onClicklogout() {
            this.$root.$data.token = null;
            this.$root.$data.user = new User();
        },
        getCategory() {
            let headers = new Headers();

            headers.append("Content-Type", "application/json");
            headers.append("Authorization", "Bearer " + this.$root.$data.token);
            const url = `${this.$loginServer}/api/category`;
            fetch(url, {
                method: "GET",
                headers: headers,
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Success:", data.data);
                    this.categoryList = data.data;
                })
                .catch((error) => {
                    console.error("Error:", error);
                    this.categoryList = [];
                });
        }
        
        
        
    },
};
</script>

<style>
</style>