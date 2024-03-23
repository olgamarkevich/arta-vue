<template>
  <section class="features">
    <!-- <div class="features__item">
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
    </div> -->

    <div v-for="feature in features" :key="feature.id" class="features__item">
      <img
        :src="`${feature.srcV}`"
        :srcset="`${feature.srcsetV}`"
        :alt="`${feature.alt}`"
        class="features__img"
      />
      <div class="features__title i18n" v-html="feature.title"></div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          id: 1,
          alt: 'Unlimited Art Creation<span>',
          title: '<span>Unlimited Art <br />Creation<span>',
          srcV: '/img/features-1.jpg',
          srcsetV: '/img/features-1@2x.jpg 2x, /img/features-1@3x.jpg 3x',
        },

        {
          id: 2,
          alt: 'Exclusive Styles',
          title: '<span>Exclusive <br />Styles</span>',
          srcV: '/img/features-2.jpg',
          srcsetV: '/img/features-2@2x.jpg 2x, /img/features-2@3x.jpg 3x',
        },

        {
          id: 3,
          alt: 'Magic Avatars With 20% Off',
          title: '<span>Magic Avatars <br />With 20% Off</span>',
          srcV: '/img/features-3.jpg',
          srcsetV:
            '/img/features-3@1.5x.jpg 1.5x, /img/features-3@2x.jpg 2x, /img/features-3@3x.jpg 3x',
        },
      ],
    };
  },
};
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
