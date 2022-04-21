<template>
    <div class="my-border">
        <h1>Tarifa</h1>
        <form class="d-flex">
            <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search" 
                />
        </form>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Autó neve</th>
                    <th scope="col">Tarifa</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(car, index) in cars" :key="index">
                    <td>{{ car.id }}</td>
                    <td>{{ car.name }}</td>
                    <td>{{ car.hourlyRate }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
class Car {
    constructor(
        id = null,
        name = null,
        licenseNumber = null,
        hourlyRate = null
    ) {
        this.id = id;
        this.name = name;
        this.licenseNumber = licenseNumber;
        this.hourlyRate = hourlyRate;
    }
}

import * as bootstrap from "bootstrap";

export default {
    name: "Autopark",
    data() {
        return {
            cars: [],
            state: "view",
            stateTitle: null,
            car: new Car(),
            form: null,
        };
    },
    created() {
        this.GetCars();
    },
    mounted() {
        this.modal = new bootstrap.Modal(document.getElementById("modal"), {
            Keyboard: false,
        });
        this.form = document.querySelector(".needs-validation");
    },
    methods: {
        GetCars() {
            let headers = new Headers();

            headers.append("Content-Type", "application/json");
            headers.append("Authorization", "Bearer " + this.$root.$data.token);
            const url = `${this.$loginServer}/api/cars`;
            fetch(url, {
                method: "GET",
                headers: headers,
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Success:", data.data);
                    this.cars = data.data;
                })
                .catch((error) => {
                    console.error("Error:", error);
                    this.cars = [];
                });
        },
        GetCarsById(id) {
            let headers = new Headers();

            headers.append("Content-Type", "application/json");
            headers.append("Authorization", "Bearer " + this.$root.$data.token);
            const url = `${this.$loginServer}/api/cars/${id}`;
            fetch(url, {
                method: "GET",
                headers: headers,
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Success:", data.data);
                    this.car = data.data;
                })
                .catch((error) => {
                    console.error("Error:", error);
                    this.car = [];
                });
        },
        putCar() {
            let headers = new Headers();

            headers.append("Content-Type", "application/json");
            headers.append("Authorization", "Bearer " + this.$root.$data.token);
            const url = `${this.$loginServer}/api/cars`;
            let data = this.car;
            fetch(url, {
                method: "PUT",
                headers: headers,
                body: JSON.stringify(data),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Success:", data.data);
                    this.GetCars();
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        },
        deleteCar(id) {
            let headers = new Headers();

            headers.append("Content-Type", "application/json");
            headers.append("Authorization", "Bearer " + this.$root.$data.token);
            const url = `${this.$loginServer}/api/cars`;
            let data = {
                id: id,
            };
            fetch(url, {
                method: "DELETE",
                headers: headers,
                body: JSON.stringify(data),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Success:", data.data);
                    this.GetCars();
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        },
        newCar() {
            let headers = new Headers();

            headers.append("Content-Type", "application/json");
            headers.append("Authorization", "Bearer " + this.$root.$data.token);
            const url = `${this.$loginServer}/api/cars`;
            let data = this.car;
            delete data.id;
            fetch(url, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(data),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Success:", data.data);
                    this.GetCars();
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