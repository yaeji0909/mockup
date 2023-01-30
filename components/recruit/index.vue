<template>
  <div>
    <div class="pt-20">
      <CommonInputSearch :total="total" />
    </div>
    <div class="flex-col md:flex md:justify-between md:flex-row pt-[60px] md:pt-20">
      <div class="flex gap-[20px]">
        <CommonSelectBox :placeholder="$t('recruit.department.all')" class="w-60" :value="departCountObj" />
        <CommonSelectBox :placeholder="$t('recruit.career.all')" class="w-60" :value="careerCountObj" />
      </div>
      <CommonFooterSelectBox />
    </div>
    <RecruitList :total="total" :recruits="recruits" />
    <CommonPagination class="mt-20" :currentPage="currentPage" @change="changePage" />
  </div>
</template>

<script setup>
import { total, recruitList } from '/components/recruit/list/recruit.json';

let recruits = ref(recruitList);
let currentPage = ref(1);
const changePage = param => {
  if (param === 1) recruits.value = recruitList;
  currentPage.value = param;
};

console.log('recruits', recruits.value);

/**
 * 직군 select setting
 */
const departList = recruits.value.map(r => r.department);
const departCountObj = {
  support: {},
  planning: {},
  development: {},
  design: {},
  marketing: {},
  sales: {},
  helmet: {},
  cs: {},
};

const support = departList.filter(d => d === '경영지원').length;
const planning = departList.filter(d => d === '경영기획').length;
const development = departList.filter(d => d === '개발').length;
const design = departList.filter(d => d === '디자인').length;
const margketing = departList.filter(d => d === '전략마케팅').length;
const sales = departList.filter(d => d === '사업/제휴영업').length;
const helmet = departList.filter(d => d === '헬멧사업부').length;
const cs = departList.filter(d => d === 'CS').length;

for (const key in departCountObj) {
  if (key === 'support') {
    departCountObj[key].count = support;
    departCountObj[key].label = '경영지원';
  } else if (key === 'planning') {
    departCountObj[key].count = planning;
    departCountObj[key].label = '경영기획';
  } else if (key === 'development') {
    departCountObj[key].count = development;
    departCountObj[key].label = '개발';
  } else if (key === 'design') {
    departCountObj[key].count = design;
    departCountObj[key].label = '디자인';
  } else if (key === 'marketing') {
    departCountObj[key].count = margketing;
    departCountObj[key].label = '전략마케팅';
  } else if (key === 'sales') {
    departCountObj[key].count = sales;
    departCountObj[key].label = '사업/제휴영업';
  } else if (key === 'helmet') {
    departCountObj[key].count = helmet;
    departCountObj[key].label = '헬멧사업부';
  } else if (key === 'cs') {
    departCountObj[key].count = cs;
    departCountObj[key].label = 'CS';
  }
}
console.log('departCountObj', departCountObj);

/**
 * 경력 select setting
 */
const careerList = recruits.value.map(r => r.career);
const careerCountObj = {
  all: {},
  nonRelevant: {},
  newcomer: {},
  experienced: {},
};

const all = careerList.filter(d => d === '전체').length;
const nonRelevant = careerList.filter(d => d === '무관').length;
const newcomer = careerList.filter(d => d === '신입').length;
const experienced = careerList.filter(d => d === '경력').length;

for (const key in careerCountObj) {
  if (key === 'all') {
    careerCountObj[key].count = all;
    careerCountObj[key].label = '전체';
  } else if (key === 'nonRelevant') {
    careerCountObj[key].count = nonRelevant;
    careerCountObj[key].label = '무관';
  } else if (key === 'newcomer') {
    careerCountObj[key].count = newcomer;
    careerCountObj[key].label = '신입';
  } else if (key === 'experienced') {
    careerCountObj[key].count = experienced;
    careerCountObj[key].label = '경력';
  }
}
console.log('careerCountObj', careerCountObj);
</script>
