<template>
  <div>
    <!-- 채용 -->
    <section>
      <div class="pt-20">
        <CommonInputSearch :total="total" @input="searchInput" />
      </div>
      <div
        class="flex-col md:flex md:justify-between md:flex-row pt-[60px] md:pt-20 w-[335px] md:w-[710px] xl:w-[1200px] m-auto"
      >
        <div class="flex gap-[20px]">
          <CommonSelectBox
            :placeholder="$t('recruit.department.all')"
            class="w-60"
            :options="departOptions"
            @changeOptions="changeOptions"
          />
          <CommonSelectBox
            :placeholder="$t('recruit.career.all')"
            class="w-60"
            :options="careerOptions"
            @changeOptions="changeOptions"
          />
        </div>
        <CommonFooterSelectBox
          :title="$t('recruit.filterSort.newest')"
          :options="[
            $t('recruit.filterSort.newest'),
            $t('recruit.filterSort.byDeadline'),
          ]"
          @changeFilter="changeFilter"
        />
      </div>
      <div class="w-[335px] md:w-[710px] xl:w-[1200px] m-auto">
        <RecruitList :total="total" :recruits="recruits" />
        <!-- <CommonPagination class="mt-20" :totalPage="1" :currentPage="currentPage" @change="changePage" /> -->
        <CommonPagination
          class="mt-20"
          :itemPerPage="6"
          :totalCount="totalCount"
          @changePage="changePage"
        />
      </div>
    </section>
    <!-- 복지 -->
    <section class="pt-[140px] md:pt-[180px] xl:pt-[200px]">
      <div class="text-left w-[335px] md:w-[710px] xl:w-[1200px] m-auto">
        <h5 class="text-2xl font-medium text-primary-aqua">
          {{ $t('recruit.benefit.companyCulture') }}
        </h5>
        <h3
          class="text-3xl md:text-4xl xl:text-5xl font-bold whitespace-pre-line pt-[10px]"
        >
          {{ $t('recruit.benefit.companyCultureDesc') }}
        </h3>
      </div>
      <RecruitBenefitListCard />
    </section>
    <!-- 인재상 -->
    <section class="pt-[140px] md:pt-[180px] xl:pt-[200px]">
      <div class="text-center w-[335px] md:w-[710px] xl:w-[1200px] m-auto">
        <h5 class="text-2xl font-medium text-primary-aqua">
          {{ $t('recruit.idealTalent.talent') }}
        </h5>
        <h3
          class="text-3xl md:text-4xl xl:text-5xl font-bold pt-[10px]"
          :class="largerThanSm ? 'whitespace-normal' : 'whitespace-pre-line'"
        >
          {{ $t('recruit.idealTalent.talentDesc') }}
        </h3>
      </div>
      <RecruitIdealTalent />
    </section>
  </div>
</template>

<script setup>
import { total, recruitList } from '/components/recruit/list/recruit.json';
import { useI18n } from 'vue-i18n';
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';
import { changeTextColor } from '/composables/input.js';

const breakpoints = useBreakpoints(breakpointsTailwind);
const largerThanSm = breakpoints.greater('sm'); // only larger than sm

let recruits = ref(recruitList);
let currentPage = ref(1);
let totalCount = ref(total);
const changePage = (param) => {
  if (param === 1) recruits.value = recruitList;
  currentPage.value = param;
};

const { t } = useI18n();

/**
 * 직군 select setting
 */
const departList = recruits.value.map((r) => r.department);

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

const departOptions = [];
departOptions.push(
  t('recruit.department.all') + ' ' + `(${allDepart + '건'})`,
  t('recruit.department.support') + ' ' + `(${support + '건'})`,
  t('recruit.department.planning') + ' ' + `(${planning + '건'})`,
  t('recruit.department.development') + ' ' + `(${development + '건'})`,
  t('recruit.department.design') + ' ' + `(${design + '건'})`,
  t('recruit.department.marketing') + ' ' + `(${marketing + '건'})`,
  t('recruit.department.sales') + ' ' + `(${sales + '건'})`,
  t('recruit.department.helmet') + ' ' + `(${helmet + '건'})`,
  t('recruit.department.cs') + ' ' + `(${cs + '건'})`
);

/**
 * 경력 select setting
 */
const careerList = recruits.value.map((r) => r.career);

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

const careerOptions = [];
careerOptions.push(
  t('recruit.career.all') + ' ' + `(${allCareer + '건'})`,
  t('recruit.career.nonRelevant') + ' ' + `(${nonRelevant + '건'})`,
  t('recruit.career.newcomer') + ' ' + `(${newcomer + '건'})`,
  t('recruit.career.experienced') + ' ' + `(${experienced + '건'})`
);

/**
 * filter list method according to selected option
 */
const changeOptions = (param, options) => {
  if (options[0].includes('직군')) {
    // 직군 (영문 버전 추가 필요)
    filterOption('department', param.split(' ')[0]);
  } else {
    // 경력
    filterOption('career', param.split(' ')[0]);
  }
};

/**
 * filter sort function
 */
const filterOption = (division, paramFirst) => {
  // 영문 버전 추가 필요
  if (paramFirst === '전체') {
    recruits.value = recruitList;
  } else {
    const filteredList = [...recruitList].filter(
      (r) => r[division] === paramFirst
    );
    recruits.value = filteredList;
  }
};

/**
 * latest sort method
 */
const changeFilter = (date) => {
  const filteredList = [...recruitList].sort(
    (a, b) => new Date(a[date]) - new Date(b[date])
  );
  recruits.value = filteredList;
};

/**
 * 검색
 */
const searchInput = (e) => {
  const filteredList = changeTextColor(e, recruitList);
  recruits.value = filteredList;
};
</script>
