<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item">
        <a href="#" class="nav__link i18n">Terms of Use</a>
      </li>
      <li class="nav__item">
        <a href="#" class="nav__link i18n">Privacy Policy</a>
      </li>
      <li class="nav__item">
        <a href="#" class="nav__link i18n">Restore</a>
      </li>
    </ul>
  </nav>
</template>

<script></script>

<style>
.nav .nav__list {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  list-style: none;
  align-items: center;
}

.nav .nav__list .nav__link {
  color: rgba(255, 255, 255, 0.5);
  font-size: 12.5px;
  text-decoration: none;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.577px;
}

.nav.minFZ .nav__list .nav__link {
  font-size: 11px;
}

.nav .nav__list .nav__item:not(:last-child) {
  margin-right: 32px;
}

.nav.minFZ {
  margin: 0 -15px;
}

.nav.minFZ .nav__list .nav__item:not(:last-child) {
  margin-right: 15px;
}

@media (hover: hover) and (pointer: fine) {
  .nav .nav__list .nav__link {
    opacity: 0.7;
  }
}
</style>
