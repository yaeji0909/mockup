<template>
  <div id="heroes">
    <section class="form-inline">
      <input type="text" class="form-control" placeholder="Search" v-model="search_filter" @keyup="updatePaginate" />
    </section>
    <section class="table table-striped">
      <ul
        class="mt-16 grid md:grid-rows-3 xl:grid-rows-2 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-14 gap-x-6 xl:gap-x-10"
      >
        <!-- <li
          v-for="(n, index) in limitArray(items)"
          :key="n.pid"
          class="group flex flex-col text-left cursor-pointer"
          @click="moveToNews(n.newsUrl)"
          v-show="setPaginate(index)"
        > -->
        <li
          v-for="(n, index) in props.items"
          :key="n.pid"
          class="group flex flex-col text-left cursor-pointer"
          @click="moveToNews(n.newsUrl)"
          v-show="setPaginate(index)"
        >
          <nuxt-img
            :src="n.imgUrl"
            alt="THUMBNAIL_IMG"
            class="h-[200px] xl:h-[240px] rounded-[20px] object-cover group-hover:scale-105 transition ease-in-out duration-300"
          />
          <p class="text-primary-aqua text-base font-medium pt-5">
            {{ n.date }}
          </p>
          <h4 class="news-title text-black text-2xl font-bold pt-3 overflow-hidden">
            {{ n.title }}
          </h4>
        </li>
      </ul>
    </section>
    <section>
      <button
        class="w-[20px] h-[20px] mr-5"
        v-for="page_index in paginate_total"
        @click.prevent="updateCurrent(page_index)"
      >
        {{ page_index }}
      </button>
    </section>
  </div>
</template>

<script setup>
const props = defineProps({
  items: { type: Array },
});

let current = ref(1);
const paginate = 6;
let paginate_total = ref(0);
let search_filter = ref('');
let status_filter = ref('');

paginate_total.value = Math.ceil(props.items.length / paginate);

const setPaginate = i => {
  if (current.value === 1) {
    return i < paginate;
  } else {
    return i >= paginate * (current.value - 1) && i < current.value * paginate;
  }
};
const setStatus = async status => {
  status_filter.value = status;
  await nextTick(() => {
    updatePaginate();
  });
};
const updateCurrent = i => {
  current.value = i;
};
const updatePaginate = () => {
  current.value = 1;
  paginate_total.value = Math.ceil(document.querySelectorAll('ul li').length / paginate);
};

const limitArray = (arr, length = 6) => {
  if (arr && arr.length) {
    if (length === -1) {
      return arr;
    }
    if (length > arr.length) {
      return arr;
    }

    return arr.slice(0, length);
  }

  return null;
};
</script>
