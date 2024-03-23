<template>
  <section class="features">
    <div v-for="feature in features" :key="feature.id" class="features__item">
      <img
        :src="`${feature.srcV}`"
        :srcset="`${feature.srcsetV}`"
        :alt="`${feature.alt}`"
        class="features__img"
      />
      <div class="features__title i18n" v-html="$t(feature.title)"></div>
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
          alt: 'Unlimited Art Creation',
          title: 'Unlimited Art <br>Creation',
          srcV: '/img/features-1.jpg',
          srcsetV: '/img/features-1@2x.jpg 2x, /img/features-1@3x.jpg 3x',
        },

        {
          id: 2,
          alt: 'Exclusive Styles',
          title: 'Exclusive <br>Styles',
          srcV: '/img/features-2.jpg',
          srcsetV: '/img/features-2@2x.jpg 2x, /img/features-2@3x.jpg 3x',
        },

        {
          id: 3,
          alt: 'Magic Avatars With 20% Off',
          title: 'Magic Avatars <br>With 20% Off',
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
