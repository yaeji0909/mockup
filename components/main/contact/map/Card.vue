<template>
  <div class="flex flex-col xl:flex-row justify-center items-center gap-10">
    <div
      v-for="map in mapList"
      :key="map.title"
      class="bg-secondary-beige flex items-end p-5 w-[340px] h-[460px] md:w-[704px] md:h-[340px] xl:w-[372px] xl:h-[460px] rounded-[20px]"
    >
      <div
        class="info-box bg-white w-[340px] md:w-[704px] xl:w-[372px] rounded-[20px] px-5 py-[25px]"
      >
        <h3 class="text-xl :text-2xl font-bold">{{ map.title }}</h3>
        <h5 class="text-xs pt-5">{{ map.addr }}</h5>
        <section
          v-if="hover"
          class="bg-gray-bg rounded-[10px] mt-[25px] px-[12px] py-[15px]"
        >
          <div class="h-5 flex gap-3">
            <img :src="PHONE" alt="PHONE" class="w-3" />
            <p class="text-2xs">{{ map.phone }}</p>
          </div>
          <div class="h-5 flex gap-3 mt-2">
            <img :src="TEL" alt="TEL" class="w-3" />
            <p class="text-2xs">{{ map.tel }}</p>
          </div>
          <div class="h-5 flex gap-3 mt-2">
            <img :src="EMAIL" alt="EMAIL" class="w-3" />
            <p class="text-2xs">{{ map.email }}</p>
          </div>
          <div class="h-5 flex gap-3 mt-2">
            <img :src="TIME" alt="TIME" class="w-3" />
            <p class="text-2xs">{{ map.time }}</p>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const PHONE =
  'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/contact_map_phone.svg';
const TEL =
  'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/contact_map_tel.svg';
const EMAIL =
  'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/contact_map_mail.svg';
const TIME =
  'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/contact_map_time.svg';

const { t } = useI18n();

const infoList = [PHONE, TEL, EMAIL, TIME];

const mapList = [
  {
    title: t('contact.headOffice'),
    addr: t('contact.headOfficeAddr'),
    phone: '064 759 8186',
    tel: '070 4009 2030',
    email: '본사 메일',
    time: t('contact.headOfficeTime'),
  },
  {
    title: t('contact.branchOffice'),
    addr: [t('contact.branchOfficeAddr'), t('contact.branchOfficeAddr2')],
    phone: '02 6929 2401',
    tel: '070 4009 2030',
    email: '지사 메일',
    time: t('contact.branchOfficeTime'),
  },
  {
    title: t('contact.helmetOffice'),
    addr: t('contact.helmetOfficeAddr'),
    phone: '02 6929 2401',
    tel: '070 4848 5497',
    email: '헬멧사업부 메일',
    time: t('contact.helmetOfficeTime'),
  },
];

/**
 * hover event
 */
const hover = ref(false);

onMounted(() => {
  const el = document.querySelector('.info-box');
  el.addEventListener('mouseenter', (e) => {
    hover.value = true;
  });
  el.addEventListener('mouseleave', (e) => {
    hover.value = false;
  });
});
</script>
