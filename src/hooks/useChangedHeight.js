import { ref, watch, onMounted } from 'vue';

function useChangedHeight() {
  const navList = ref(null);
  const changedHeight = ref();

  const onResize = () => {
    if (navList.value.clientHeight > 20) {
      changedHeight.value = true;
    } else {
      changedHeight.value = false;
    }
  };

  watch(changedHeight, () => {
    onResize();
  });

  onMounted(() => {
    onResize();
  });

  return {
    navList,
    changedHeight,
    onResize,
  };
}

export default useChangedHeight;
