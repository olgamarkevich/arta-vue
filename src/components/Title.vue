<template>
  <div class="title" v-html="$t('Get Unlimited <br>Access')"></div>
</template>

<style scoped>
.title {
  text-align: center;
  color: #fff;
  text-shadow: 0px 0px 48px rgba(4, 3, 26, 0.83);
  font-size: 42px;
  line-height: 1.09em;
  margin-bottom: 40px;
  font-weight: 800;
}

@media screen and (max-height: 700px) {
  .title {
    margin-bottom: 20px;
  }
}

@media screen and (max-height: 600px) {
  .title {
    font-size: 35px;
  }
}
</style>
