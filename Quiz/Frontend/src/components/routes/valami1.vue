<template>
    <div class="my-border">
        <h1>Autópark</h1>
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Menetidő</th>
                    <th scope="col">Mikor</th>
                    <th scope="col">Autó</th>
                    <th scope="col">
                        <!-- new -->
                        <button
                            type="button"
                            class="btn btn-outline-success ms-1 btn-sm"
                            @click="onClickNew()">
                            <i class="bi bi-plus-lg"></i>
                        </button>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(trip, index) in trips" :key="index">
                    <td>{{ trip.numberOfMinutes }}</td>
                    <td>{{ trip.date }}</td>
                    <td>{{ trip.name }}</td>
                    <td>
                        <!-- edit -->
                        <button
                            type="button"
                            class="btn btn-outline-warning ms-1 btn-sm"
                            @click="onClickEdit(trip.id)">
                            <i class="bi bi-pencil"></i>
                        </button>

                        <!-- delete -->
                        <button
                            type="button"
                            class="btn btn-outline-danger ms-1 btn-sm"
                            @click="onClickDelete(trip.id)">
                            <i class="bi bi-trash"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
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
                                <label for="numberOfMinutes" class="form-label"
                                    >Menetidő:
                                </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="numberOfMinutes"
                                    placeholder="Fuvarok ideje"
                                    v-model="trip.numberOfMinutes"
                                    required />
                                <div class="invalid-feedback">
                                    A Menetidő kötelező!
                                </div>
                            </div>

                            <!-- licenseNumber -->
                            <div class="mb-3 col-7">
                                <label for="date" class="form-label"
                                    >Év:
                                </label>
                                <input
                                    type="datetime-local"
                                    class="form-control"
                                    id="date"
                                    placeholder="XXXXXX"
                                    v-model="trip.date"
                                    required />
                                <div class="invalid-feedback">
                                    Az év szám kötelező, vagy nem jó a forma!
                                </div>
                            </div>
                            <!-- hourlyRate -->
                            <div class="mb-3 col-5">
                                <label class="form-label" for="cars">Choose a car:</label>
                                <!-- Az id-t adatkötjük nem a name-t, nem a car-t -->
                                <select class="form-select" id="cars" v-model="trip.carId">
                                    <option
                                        v-for="(car, index) in carsAbc"
                                        :key="index"
                                        :value="car.id">
                                        {{ car.name }}
                                    </option>
                                </select>
                                <div class="invalid-feedback">
                                    választani kötelező!
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
class Trip {
    constructor(id = null, numberOfMinutes = null, date = null, carId = null) {
        this.id = id;
        this.numberOfMinutes = numberOfMinutes;
        this.date = date;
        this.carId = carId;
    }
}

import * as bootstrap from "bootstrap";

export default {
    name: "Autopark",
    data() {
        return {
            trips: [],
            state: "view",
            stateTitle: null,
            trip: new Trip(),
            form: null,
            carsAbc: null
        };
    },
    created() {
        this.GetTrips();
        this.GetCarsAbc();
    },
    mounted() {
        this.modal = new bootstrap.Modal(document.getElementById("modal"), {
            Keyboard: false,
        });
        this.form = document.querySelector(".needs-validation");
    },
    methods: {
        GetTrips() {
            let headers = new Headers();

            headers.append("Content-Type", "application/json");
            headers.append("Authorization", "Bearer " + this.$root.$data.token);
            const url = `${this.$loginServer}/api/tripscar`;
            fetch(url, {
                method: "GET",
                headers: headers,
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Success:", data.data);
                    this.trips = data.data;
                })
                .catch((error) => {
                    console.error("Error:", error);
                    this.trips = [];
                });
        },
        GetCarsAbc() {
            let headers = new Headers();

            headers.append("Content-Type", "application/json");
            headers.append("Authorization", "Bearer " + this.$root.$data.token);
            const url = `${this.$loginServer}/api/carsabc`;
            fetch(url, {
                method: "GET",
                headers: headers,
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Success:", data.data);
                    this.carsAbc = data.data;
                })
                .catch((error) => {
                    console.error("Error:", error);
                    this.carsAbc = [];
                });
        },
        GetTripsById(id) {
            let headers = new Headers();

            headers.append("Content-Type", "application/json");
            headers.append("Authorization", "Bearer " + this.$root.$data.token);
            const url = `${this.$loginServer}/api/trips/${id}`;
            fetch(url, {
                method: "GET",
                headers: headers,
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Success:", data.data);
                    this.trip = data.data;
                })
                .catch((error) => {
                    console.error("Error:", error);
                    this.trip = new Trip();
                });
        },
        putTrip() {
            let headers = new Headers();

            headers.append("Content-Type", "application/json");
            headers.append("Authorization", "Bearer " + this.$root.$data.token);
            const url = `${this.$loginServer}/api/trips`;
            let data = this.trip;
            fetch(url, {
                method: "PUT",
                headers: headers,
                body: JSON.stringify(data),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Success:", data.data);
                    this.GetTrips();
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        },
        deleteTrip(id) {
            let headers = new Headers();

            headers.append("Content-Type", "application/json");
            headers.append("Authorization", "Bearer " + this.$root.$data.token);
            const url = `${this.$loginServer}/api/trips`;
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
                    this.GetTrips();
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        },
        newTrip() {
            let headers = new Headers();

            headers.append("Content-Type", "application/json");
            headers.append("Authorization", "Bearer " + this.$root.$data.token);
            const url = `${this.$loginServer}/api/trips`;
            let data = this.trip;
            delete data.id;
            fetch(url, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(data),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Success:", data.data);
                    this.GetTrips();
                    this.state = "view";
                })
                .catch((error) => {
                    console.error("Error:", error);
                    this.state = "view";
                });
        },
        onClickNew() {
            this.state = "new";
            this.stateTitle = "Új Trip";
            this.trip = new Trip();
            this.modal.show();
        },
        onClickEdit(id) {
            this.state = "edit";
            this.stateTitle = "TripMódosítás";
            this.GetTripsById(id);
            this.modal.show();
        },
        onClickDelete(id) {
            this.state = "delete";
            this.deleteTrip(id);
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
                    this.putTrip();
                } else if (this.state == "new") {
                    //post
                    this.newTrip();
                }
            } else {
                return;
            }
            this.modal.hide();
            this.state = "view";
        },
    },
};
</script>

<style>
</style>