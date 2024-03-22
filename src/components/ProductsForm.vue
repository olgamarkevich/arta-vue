<template>
  <section class="form">
    <div class="selectors">
      <div class="radio-line">
        <input
          type="radio"
          checked="checked"
          name="selector"
          class="radio-input"
          data-link="https://apple.com/"
        />
        <div class="selectors__item">
          <div class="selectors__item-l">
            <div class="selectors__tariff i18n">YEARLY ACCESS</div>
            <div class="selectors__tariff-info i18n">
              Just {{ price }} per year
            </div>
          </div>
          <div class="selectors__item-r">
            <div class="selectors__item-price i18n">
              {{ price }} <br />per week
            </div>
          </div>
        </div>
        <span class="best-offer-label i18n">BEST OFFER</span>
      </div>

      <div class="radio-line">
        <input
          type="radio"
          name="selector"
          class="radio-input"
          data-link="https://google.com/"
        />
        <div class="selectors__item">
          <div class="selectors__item-l">
            <div class="selectors__tariff i18n">WEEKLY ACCESS</div>
          </div>
          <div class="selectors__item-r">
            <div class="selectors__item-price i18n">
              {{ price }} <br />per week
            </div>
          </div>
        </div>
      </div>
    </div>
    <button id="continueBtn" type="button" class="button i18n">Continue</button>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.form {
  margin-bottom: 5.23vh;
}

.button {
  height: 56px;
  background-color: #fff;
  font-size: 20px;
  font-style: normal;
  text-align: center;
  display: block;
  width: 100%;
  border: none;
  border-radius: 32px;
  font-weight: 500;
  cursor: pointer;
  color: #070b33;
}

@media (pointer: none) {
  button:focus {
    opacity: 0.8;
  }
}

.selectors__item {
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  min-height: 57px;
  justify-content: space-between;
  border-radius: 32px;
  background: rgba(255, 255, 255, 0.1);
  padding: 0px 24px;
  font-weight: 400;
}

.selectors__tariff {
  text-transform: uppercase;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
}

.selectors__tariff-info {
  color: rgba(255, 255, 255, 0.7);
  font-size: 16px;
  margin-top: 2px;
  font-weight: 400;
}

.selectors__tariff.scale-text {
  font-size: 14px;
}

.selectors__item-l {
  width: calc(100% - 102px);
  padding-right: 10px;
}

.selectors__item-r {
  color: rgba(255, 255, 255, 0.7);
  font-size: 16px;
  width: 102px;
}

.selectors {
  margin-bottom: 16px;
}

.radio-line {
  position: relative;
}

.radio-input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  width: 100%;
  height: 100%;
}

.radio-line .radio-input:checked ~ .selectors__item {
  background: rgba(255, 255, 255, 0.3);
}

.radio-line .radio-input:checked ~ .selectors__item:after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 1px solid #fff;
  content: '';
  border-radius: 32px;
}

.best-offer-label {
  position: absolute;
  top: -14px;
  right: 25px;
  color: #141131;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.5);
  padding: 3px 19px;
  text-transform: uppercase;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
}

@media screen and (max-height: 700px) {
  .form {
    margin-bottom: 25px;
  }
  .selectors__tariff.scale-text {
    font-size: 13px;
  }
}

@media screen and (max-height: 600px) {
  .form {
    margin-bottom: 15px;
  }
}

@media (hover: hover) and (pointer: fine) {
  .button {
    opacity: 0.7;
  }
}
</style>
