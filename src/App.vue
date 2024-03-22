<template>
  <main class="wrapper">
    <CloseBtn />
    <Title />
    <Features />
    <ProductsForm />
    <Links />
  </main>
</template>

<script>
import Features from './components/Features';
import Links from './components/Links';
import ProductsForm from './components/ProductsForm';
import Title from './components/Title';
import CloseBtn from './components/CloseBtn';

export default {
  components: { Links, ProductsForm, Features, Title, CloseBtn },
};
</script>

<style>
@import 'normalize.css';
@import '../src/assets/fonts/fonts.css';

#app {
  height: 100%;
}

html {
  height: 100%;
}

body {
  font-size: 14px;
  font-family: 'SFProDisplay';
  color: #fff;
  min-width: 320px;
  height: 100%;
  font-weight: 400;
}

div * {
  box-sizing: border-box;
}

h3 {
  font-size: 10px;
}

.wrapper {
  height: 100%;
  background-image: image-set(
    '../src/assets/images/bg.jpg' 1x,
    '../src/assets/images/bg@2x.jpg' 2x,
    '../src/assets/images/bg@3x.jpg' 3x
  );
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 30px 24px;
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-sizing: border-box;
  position: relative;
}

@media screen and (max-height: 700px) {
  .wrapper {
    padding: 15px 24px;
    background-position: center -40px;
  }
}
</style>
