<template>
    <div class="avatar_container">
        <div class="avatar_inner"> {{ fname }} </div>

    </div>
</template>
<style scoped>

.avatar_container {
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    margin: 0;
    background-color: #8FE2E2;
}

.avatar_inner {
    font-family:'Inter', sans-serif;
    color: white;
    font-weight: 600;
    font-size: 32px;
}

</style>

<script>
export default {
data() {
  return {

            fname: 'U',
            lname: 'Y',
            email: 'uy@email.com',
            password: 'pword'
    }
  }
}

</script>
