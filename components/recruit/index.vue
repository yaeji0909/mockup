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
  (d) => d === t('recruit.department.managementSupport')
).length;
const planning = departList.filter(
  (d) => d === t('recruit.department.managementPlanning')
).length;
const development = departList.filter(
  (d) => d === t('recruit.department.development')
).length;
const design = departList.filter(
  (d) => d === t('recruit.department.design')
).length;
const margketing = departList.filter(
  (d) => d === t('recruit.department.margketing')
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
    departCountObj[key].count = allDepart;
    departCountObj[key].label = t('recruit.department.all');
  } else if (key === 'support') {
    departCountObj[key].count = support;
    departCountObj[key].label = t('recruit.department.managementSupport');
  } else if (key === 'planning') {
    departCountObj[key].count = planning;
    departCountObj[key].label = t('recruit.department.managementPlanning');
  } else if (key === 'development') {
    departCountObj[key].count = development;
    departCountObj[key].label = t('recruit.department.development');
  } else if (key === 'design') {
    departCountObj[key].count = design;
    departCountObj[key].label = t('recruit.department.design');
  } else if (key === 'marketing') {
    departCountObj[key].count = margketing;
    departCountObj[key].label = t('recruit.department.margketing');
  } else if (key === 'sales') {
    departCountObj[key].count = sales;
    departCountObj[key].label = t('recruit.department.sales');
  } else if (key === 'helmet') {
    departCountObj[key].count = helmet;
    departCountObj[key].label = t('recruit.department.helmet');
  } else if (key === 'cs') {
    departCountObj[key].count = cs;
    departCountObj[key].label = t('recruit.department.cs');
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
    careerCountObj[key].count = allCareer;
    careerCountObj[key].label = t('recruit.career.all');
  } else if (key === 'nonRelevant') {
    careerCountObj[key].count = nonRelevant;
    careerCountObj[key].label = t('recruit.career.nonRelevant');
  } else if (key === 'newcomer') {
    careerCountObj[key].count = newcomer;
    careerCountObj[key].label = t('recruit.career.newcomer');
  } else if (key === 'experienced') {
    careerCountObj[key].count = experienced;
    careerCountObj[key].label = t('recruit.career.experienced');
  }
}

/**
 * filter list according to selected option
 */
const changeOptions = (param, options) => {
  if (options.all.label === '전체 직군') {
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
