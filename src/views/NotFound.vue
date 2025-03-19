<template>
  <div class="error-message">
    <h1>UPS! SOMETHING IS WRONG!</h1>
    <p>page not found</p>
    <router-link class="btn-back" to="/">Back to Home</router-link>
  </div>
</template>

<style scoped lang="scss">
.error-message {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: $light-text;
  min-height: 80vh;
  h1 {
    font-size: 45px;
  }
  p {
    font-size: 32px;
  }
  .btn-back {
    position: relative;
    width: 180px;
    height: 60px;
    cursor: pointer;
    background: transparent;
    border: 1px solid #adff91;
    box-sizing: border-box;
    outline: none;
    transition: 20s ease-in-out;
    color: $light-text;
    text-decoration: none;
    margin: 0 auto;
    padding: 0;
    display: inline-block;
    line-height: 50px;
    text-align: center;
    &:hover {
      transition: 1s ease-in-out;
      background: #4fda62;
    }
  }
}
</style>
