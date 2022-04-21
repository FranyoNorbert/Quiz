<template>
  <div class="my-border">
		<h1>Profile</h1>
    <p>Keresztnév: {{$root.$data.user.firstName}}</p>
        <p>Vezetéknév: {{$root.$data.user.lastName}}</p>
        <p>Gender: {{$root.$data.user.gender}}</p>
        <p>Email: {{$root.$data.user.email}}</p>
        <p>Number: {{$root.$data.user.phoneNumber}}</p>
  </div>
</template>

<script>
export default {
    name: "Profile"
}
</script>

<style>

</style>