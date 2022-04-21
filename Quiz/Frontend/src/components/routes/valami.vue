<template>
    <div class="row my-border">
        <div class="col-8">
            <h1>Autópark</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Név</th>
                        <th scope="col">Rendszám</th>
                        <th scope="col">Tarifa</th>
                        <th scope="col">
                            Műveletek
                            <!-- new -->
                            <button
                                type="button"
                                class="btn btn-online-success ms-1 btn-sm"
                                @click="onClickNew()">
                                <i class="bi bi-plus-lg"></i>
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="(car, index) in cars"
                        :key="index"
                        class="static"
                        @click="onClickRow(car.id)"
                        :class="{ 'bg-primary': car.id == isValid }">
                        <td>{{ car.name }}</td>
                        <td>{{ car.licenseNumber }}</td>
                        <td>{{ car.hourlyRate }}</td>
                        <td>
                            <!-- edit -->
                            <button
                                type="button"
                                class="btn btn-online-warning ms-1 btn-sm"
                                @click="onClickEdit(car.id)">
                                <i class="bi bi-pencil"></i>
                            </button>

                            <!-- delete -->
                            <button
                                type="button"
                                class="btn btn-online-danger ms-1 btn-sm"
                                @click="onClickDelete(car.id)">
                                <i class="bi bi-archive"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="col-4">
            <h1>Fuvarok</h1>
        </div>
        <!-- Button trigger modal -->
        <!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal">
  Launch demo modal
</button> -->

        <!-- Modal -->
        <div
            class="modal fade"
            id="modal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                            {{ stateTitle }}
                        </h5>

                        <button
                            type="button"
                            class="btn-close"
                            aria-label="Close"
                            @click="onClickCancel()"></button>
                    </div>
                    <div class="modal-body">
                        <form class="row g-3 needs-validation" novalidate>
                            <!-- űrlap -->
                            <!-- name -->
                            <div class="mb-3 col-12">
                                <label for="name" class="form-label"
                                    >Név:
                                </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="name"
                                    placeholder="Autó neve"
                                    v-model="car.name"
                                    required />
                                <div class="invalid-feedback">
                                    Az autó neve kötelező!
                                </div>
                            </div>

                            <!-- licenseNumber -->
                            <div class="mb-3 col-7">
                                <label for="licenseNumber" class="form-label"
                                    >Rendszám:
                                </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="licenseNumber"
                                    pattern="^[A-Z]{3}-[0-9]{3}]$"
                                    placeholder="XXX-999"
                                    v-model="car.licenseNumber"
                                    required />
                                <div class="invalid-feedback">
                                    Az autó rendszáma kötelező, vagy nem jó a
                                    forma!
                                </div>
                            </div>
                            <!-- hourlyRate -->
                            <div class="mb-3 col-5">
                                <label for="hourlyRate" class="form-label"
                                    >Óradíj:
                                </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="hourlyRate"
                                    placeholder="Óradíj"
                                    v-model="car.hourlyRate"
                                    required />
                                <div class="invalid-feedback">
                                    Az Óradíj kötelező!
                                </div>
                            </div>
                        </form>
                    </div>

                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-secondary"
                            @click="onClickCancel()">
                            Cancle
                        </button>
                        <button
                            type="button"
                            class="btn btn-primary"
                            @click="onClickSaveData()">
                            Mentés
                        </button>
                    </div>
                </div>
            </div>
        </div>
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
            isValid: null,
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
        onClickNew() {
            this.state = "new";
            this.stateTitle = "Új autó";
            this.car = new Car();
            this.modal.show();
        },
        onClickEdit(id) {
            this.state = "edit";
            this.stateTitle = "Adatmódosítás";
            this.modal.show();
            this.GetCarsById(id);
        },
        onClickDelete(id) {
            this.state = "delete";
            this.deleteCar(id);
            this.state = "view";
        },
        onClickCancel() {
            this.state = "view";
            this.modal.hide();
        },
        onClickSaveData() {
            this.form.classList.add("was-validated");
            if (this.form.checkValidity()) {
                if (this.state == "edit") {
                    //put
                    this.putCar();
                } else if (this.state == "new") {
                    //post
                    this.newCar();
                }
            } else {
                return;
            }
            this.modal.hide();
            this.state = "view";
        },
        onClickRow(id) {
            this.isValid = id;
        },
    },
};
</script>

<style>
</style>