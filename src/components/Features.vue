<template>
  <section class="features">
    <div class="features__item">
      <img
        src="../assets/images/features-1.jpg"
        srcset="
          ../assets/images/features-1@2x.jpg 2x,
          ../assets/images/features-1@3x.jpg 3x
        "
        alt="Unlimited Art Creation"
        class="features__img"
      />

      <div class="features__title i18n">Unlimited Art <br />Creation</div>
    </div>

    <div class="features__item">
      <img
        src="../assets/images/features-2.jpg"
        srcset="
          ../assets/images/features-2@2x.jpg 2x,
          ../assets/images/features-2@3x.jpg 3x
        "
        alt="Exclusive Styles"
        class="features__img"
      />

      <div class="features__title i18n">Exclusive <br />Styles</div>
    </div>

    <div class="features__item">
      <img
        src="../assets/images/features-3.jpg"
        srcset="
          ../assets/images/features-3@1.5x.jpg 1.5x,
          ../assets/images/features-3@2x.jpg   2x,
          ../assets/images/features-3@3x.jpg   3x
        "
        alt="Magic Avatars"
        class="features__img"
      />

      <div class="features__title i18n">Magic Avatars <br />With 20% Off</div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.features {
  margin-bottom: 6vh;
  display: flex;
  gap: 14px;
}

.features__item {
  min-height: 140px;
  width: 33.3%;
  border-radius: 15px;
  font-size: 11px;
  display: flex;
  align-items: flex-end;
  position: relative;
}

.features__item .features__title {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 8px 10px;
}

.features__item .features__img {
  width: 100%;
  border-radius: 16px;
}

.features__item > * {
  position: relative;
  z-index: 20;
}

@media screen and (max-height: 700px) {
  .features {
    margin-bottom: 4vh;
  }
}
</style>
