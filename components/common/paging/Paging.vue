<template>
  <div id="heroes">
    <form class="form-inline">
      <input
        type="text"
        class="form-control"
        placeholder="Search"
        v-model="search_filter"
        @keyup="updatePaginate"
      />
      <button @click.prevent="setStatus('')">All</button>
      <button @click.prevent="setStatus('DC')">DC</button>
      <button @click.prevent="setStatus('Marvel')">Marvel</button>
    </form>

    <section class="table table-striped">
      <div>
        <div>
          <td>Hero Name</td>
          <td>Universe</td>
        </div>
      </div>
      <ul>
        <li
          v-for="(hero, index) in heroes"
          v-show="setPaginate(index)"
          class="flex gap-40"
        >
          <p>{{ hero.name }}</p>
          <p>{{ hero.universe }}</p>
        </li>
      </ul>
    </section>
    <div id="pagination">
      <a
        href="#"
        class="btn btn-default"
        v-for="page_index in paginate_total"
        @click.prevent="updateCurrent(page_index + 1)"
      >
        {{ page_index + 1 }}
      </a>
    </div>
  </div>
</template>

<script setup>
let current = ref(1);
const heroes = [
  { name: 'Wolverine', universe: 'Marvel' },
  { name: 'Batman', universe: 'DC' },
  { name: 'Beast', universe: 'Marvel' },
  { name: 'Superman', universe: 'DC' },
  { name: 'Wonder Woman', universe: 'DC' },
  { name: 'Iceman', universe: 'Marvel' },
  { name: 'Black Panther', universe: 'Marvel' },
  { name: 'Beast Boy', universe: 'DC' },
  { name: 'Captain America', universe: 'Marvel' },
  { name: 'Hawkgirl', universe: 'DC' },
  { name: 'Cyclops', universe: 'Marvel' },
  { name: 'Green Lantern', universe: 'DC' },
  { name: 'Thor', universe: 'Marvel' },
  { name: 'Flash', universe: 'DC' },
  { name: 'Spider-man', universe: 'Marvel' },
  { name: 'Martian Manhunter', universe: 'DC' },
  { name: 'Nightwing', universe: 'DC' },
  { name: 'Raven', universe: 'DC' },
  { name: 'Hulk', universe: 'Marvel' },
  { name: 'Shehulk', universe: 'Marvel' },
];
const paginate = 6;
let paginate_total = ref(0);
let search_filter = ref('');
let status_filter = ref('');

paginate_total.value = Math.ceil(heroes.length / paginate);

const setPaginate = (i) => {
  if (current.value === 1) {
    return i < paginate;
  } else {
    return i >= paginate * (current.value - 1) && i < current.value * paginate;
  }
};
const setStatus = async (status) => {
  status_filter.value = status;
  await nextTick(() => {
    updatePaginate();
  });
};
const updateCurrent = (i) => {
  current.value = i;
};
const updatePaginate = () => {
  current.value = 1;
  paginate_total.value = Math.ceil(
    document.querySelectorAll('ul li').length / paginate
  );
};
</script>

<style scoped></style>
