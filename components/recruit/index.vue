<template>
  <div>
    <div class="pt-20">
      <CommonInputSearch :total="total" />
    </div>
    <div
      class="flex-col md:flex md:justify-between md:flex-row pt-[60px] md:pt-20"
    >
      <div class="flex gap-[20px]">
        <CommonSelectBox
          :placeholder="$t('recruit.department.all')"
          class="w-60"
          :options="departCountObj"
          @changeOptions="changeOptions"
        />
        <CommonSelectBox
          :placeholder="$t('recruit.career.all')"
          class="w-60"
          :options="careerCountObj"
          @changeOptions="changeOptions"
        />
      </div>
      <CommonFooterSelectBox :title="$t('recruit.filterSort.newest')" />
    </div>
    <RecruitList :total="total" :recruits="recruits" />
    <CommonPagination
      class="mt-20"
      :currentPage="currentPage"
      @change="changePage"
    />
  </div>
</template>

<script setup>
import { total, recruitList } from '/components/recruit/list/recruit.json';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

let recruits = ref(recruitList);
let currentPage = ref(1);
const changePage = (param) => {
  if (param === 1) recruits.value = recruitList;
  currentPage.value = param;
};

/**
 * 직군 select setting
 */
const departList = recruits.value.map((r) => r.department);
const departCountObj = {
  all: {},
  support: {},
  planning: {},
  development: {},
  design: {},
  marketing: {},
  sales: {},
  helmet: {},
  cs: {},
};

const allDepart = departList.length;
const support = departList.filter(
  (d) => d === t('recruit.department.support')
).length;
const planning = departList.filter(
  (d) => d === t('recruit.department.planning')
).length;
const development = departList.filter(
  (d) => d === t('recruit.department.development')
).length;
const design = departList.filter(
  (d) => d === t('recruit.department.design')
).length;
const marketing = departList.filter(
  (d) => d === t('recruit.department.marketing')
).length;
const sales = departList.filter(
  (d) => d === t('recruit.department.sales')
).length;
const helmet = departList.filter(
  (d) => d === t('recruit.department.helmet')
).length;
const cs = departList.filter((d) => d === t('recruit.department.cs')).length;

for (const key in departCountObj) {
  if (key === 'all') {
    departCountObj[key].text =
      t('recruit.department.all') + ' ' + `(${allDepart + '건'})`;
  } else if (key === 'support') {
    departCountObj[key].text =
      t('recruit.department.support') + ' ' + `(${support + '건'})`;
  } else if (key === 'planning') {
    departCountObj[key].text =
      t('recruit.department.planning') + ' ' + `(${planning + '건'})`;
  } else if (key === 'development') {
    departCountObj[key].text =
      t('recruit.department.development') + ' ' + `(${development + '건'})`;
  } else if (key === 'design') {
    departCountObj[key].text =
      t('recruit.department.design') + ' ' + `(${design + '건'})`;
  } else if (key === 'marketing') {
    departCountObj[key].text =
      t('recruit.department.marketing') + ' ' + `(${marketing + '건'})`;
  } else if (key === 'sales') {
    departCountObj[key].text =
      t('recruit.department.sales') + ' ' + `(${sales + '건'})`;
  } else if (key === 'helmet') {
    departCountObj[key].text =
      t('recruit.department.helmet') + ' ' + `(${helmet + '건'})`;
  } else if (key === 'cs') {
    departCountObj[key].text =
      t('recruit.department.cs') + ' ' + `(${cs + '건'})`;
  }
}

/**
 * 경력 select setting
 */
const careerList = recruits.value.map((r) => r.career);
const careerCountObj = {
  all: {},
  nonRelevant: {},
  newcomer: {},
  experienced: {},
};

const allCareer = careerList.length;
const nonRelevant = careerList.filter(
  (d) => d === t('recruit.career.nonRelevant')
).length;
const newcomer = careerList.filter(
  (d) => d === t('recruit.career.newcomer')
).length;
const experienced = careerList.filter(
  (d) => d === t('recruit.career.experienced')
).length;

for (const key in careerCountObj) {
  if (key === 'all') {
    careerCountObj[key].text =
      t('recruit.career.all') + ' ' + `(${allCareer + '건'})`;
  } else if (key === 'nonRelevant') {
    careerCountObj[key].text =
      t('recruit.career.nonRelevant') + ' ' + `(${nonRelevant + '건'})`;
  } else if (key === 'newcomer') {
    careerCountObj[key].text =
      t('recruit.career.newcomer') + ' ' + `(${newcomer + '건'})`;
  } else if (key === 'experienced') {
    careerCountObj[key].text =
      t('recruit.career.experienced') + ' ' + `(${experienced + '건'})`;
  }
}

/**
 * filter list according to selected option
 */
const changeOptions = (param, options) => {
  if (options.all.text.includes('직군')) {
    // 직군 (영문 버전 추가 필요)
    filterSort('department', param.split(' ')[0]);
  } else {
    // 경력
    filterSort('career', param.split(' ')[0]);
  }
};

/**
 * filter sort function
 */
const filterSort = (division, paramFirst) => {
  // 영문 버전 추가 필요
  if (paramFirst === '전체') {
    recruits.value = recruitList;
  } else {
    const res = [...recruitList].filter((r) => r[division] === paramFirst);
    recruits.value = res;
  }
};
</script>
