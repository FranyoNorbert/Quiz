<template>
    <div class="my-border">
        <!-- 5. Cserélkük le a lineket: a -> router-link, href -> to, link -> route (útvonal) -->

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <router-link class="navbar-brand" to="/">Navbar</router-link>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link
                                class="nav-link active"
                                aria-current="page"
                                to="/"
                                >Főoldal</router-link
                            >
                        </li>
                         <li class="nav-item">
                             <router-link class="nav-link"
                                to="/tarifa"
                                role="button"
                                aria-expanded="false">
                                Tarifa</router-link>
                         </li>
                        <!--#region adatKarbantartás -->
                        <li class="nav-item dropdown" v-if="loggedIn()">
                            <a
                                class="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
                                adatKarbantartás
                            </a>
                            <ul
                                class="dropdown-menu"
                                aria-labelledby="navbarDropdown">
                                <li>
                                    <router-link
                                        class="dropdown-item"
                                        to="/autopark"
                                        >Autópark</router-link
                                    >
                                </li>
                                <li>
                                    <router-link
                                        class="dropdown-item"
                                        to="/fuvarok"
                                        >Fuvarok</router-link
                                    >
                                </li>
                                <li><hr class="dropdown-divider" /></li>
                                <li>
                                    <router-link
                                        class="dropdown-item"
                                        to="/users"
                                        >Users</router-link
                                    >
                                </li>
                            </ul>
                        </li>
                        
                        <!--#endregion adatKarbantartás -->

                        <!--#region login -->
                        <li class="nav-item dropdown" v-if="loggedIn()">
                            <a
                                class="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
                                {{ $root.$data.user.lastName }}
                            </a>
                            <ul
                                class="dropdown-menu"
                                aria-labelledby="navbarDropdown">
                                <li @click.prevent="onClicklogout()">
                                    <router-link
                                        class="dropdown-item"
                                        to="/login"
                                        >Logout</router-link
                                    >
                                </li>
                                <li>
                                    <router-link
                                        class="dropdown-item"
                                        to="/profile"
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
                        <button class="btn btn-outline-success" type="submit">
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

export default {
    name: "Menu",
    methods: {
        loggedIn() {
            return Boolean(this.$root.$data.token);
        },
        onClicklogout() {
            this.$root.$data.token = null;
            this.$root.$data.user = new User();
        },
    },
};
</script>

<style>
</style>