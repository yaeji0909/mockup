<template>
  <div
    class="flex justify-center items-center text-xs md:text-base font-medium"
  >
    <vue-awesome-paginate
      :total-items="totalCount"
      v-model="currentPage"
      :items-per-page="props.itemPerPage"
      :max-pages-shown="3"
      :on-click="onClickHandler"
      class="gap-2"
    >
      <template #prev-button>
        <button
          :class="[
            'prev-btn cursor-pointer w-[20px] h-[20px] bg-no-repeat bg-center',
            prevButtonDisabled
              ? 'bg-pagination-gray cursor-not-allowed rotate-180'
              : 'bg-pagination-bk hover:bg-pagination-mint rotate-180',
          ]"
          :disabled="prevButtonDisabled"
          @click="previous"
        />
      </template>

      <template #next-button>
        <button
          :class="[
            'next-btn cursor-pointer w-[20px] h-[20px] bg-no-repeat bg-center',
            nextButtonDisabled
              ? 'bg-pagination-gray cursor-not-allowed'
              : 'bg-pagination-bk hover:bg-pagination-mint',
          ]"
          :disabled="nextButtonDisabled"
          @click="next"
        />
      </template>
    </vue-awesome-paginate>
  </div>
</template>

<script setup>
let currentPage = ref(1);

const props = defineProps({
  itemPerPage: {
    type: Number,
    default: 6,
  },
  totalCount: {
    type: Number,
    default: 70,
  },
});

const emit = defineEmits(['changePage']);
const onClickHandler = (page) => {
  currentPage.value = page;
  emit('changePage', page);
};

// 다음 버튼 비활성화 조건
const nextButtonDisabled = computed(
  () => currentPage.value >= Math.ceil(props.totalCount / props.itemPerPage)
);

// 이전 버튼 비활성화 조건
const prevButtonDisabled = computed(() => currentPage.value <= 1);
</script>

<style scoped>
:deep(.paginate-buttons) {
  cursor: pointer;
  border-radius: 6px;
  border: none;
  color: #081236;
  display: flex;
  justify-content: center;
  align-items: center;
}
@media (min-width: 1024px) {
  :deep(.paginate-buttons) {
    height: 40px;
    width: 40px;
  }
}
@media (min-width: 576px) and (max-width: 1023px) {
  :deep(.paginate-buttons) {
    height: 34px;
    width: 34px;
  }
}
@media (max-width: 575px) {
  :deep(.paginate-buttons) {
    height: 26px;
    width: 26px;
  }
}
:deep(.active-page) {
  background-color: #37d1c7;
  color: white;
}
:deep(.paginate-buttons:hover) {
  background-color: #37d1c7;
  color: white;
}
:deep(.paginate-buttons.back-button:hover),
:deep(.paginate-buttons.next-button:hover) {
  background-color: transparent;
}
</style>
