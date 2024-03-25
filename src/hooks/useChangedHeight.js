import { ref, onMounted } from 'vue';

function useChangedHeight(maxHeight) {
  const elementRef = ref(null);
  const heightExceededRef = ref(false);

  const checkHeight = () => {
    if (elementRef.value !== null) {
      heightExceededRef.value = elementRef.value.clientHeight > maxHeight;
    }
  };

  onMounted(() => {
    checkHeight();
  });

  return {
    elementRef,
    heightExceededRef,
  };
}

export default useChangedHeight;
