<template>
  <a href="#" class="cross-icon"></a>
</template>

<script>
export default {};
</script>

<style scoped>
.cross-icon {
  background: url(../assets/icon/cross-icon.svg) center no-repeat;
  width: 12px;
  height: 12px;
  display: inline-block;
  position: absolute;
  top: 72px;
  left: 24px;
}

@media (hover: hover) and (pointer: fine) {
  .cross-icon {
    opacity: 0.7;
  }
}

@media screen and (max-height: 700px) {
  .cross-icon {
    top: 30px;
  }
}

@media screen and (max-height: 600px) {
  .cross-icon {
    top: 20px;
  }
}
</style>
