<script setup>

import Avatar from "./components/Avatar.vue";
import LoadingAnimation from "./components/LoadingAnimation.vue";

</script>

<template>
<Avatar />
<router-view></router-view>
<LoadingAnimation />

</template>

<style>

@import './assets/base.css/';

</style>
