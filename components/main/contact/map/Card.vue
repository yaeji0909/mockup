<template>
  <div class="flex justify-center gap-10">
    <div
      v-for="map in mapList"
      :key="map.title"
      class="bg-secondary-beige w-[372px] h-[460px] md:w-[704px] md:h-[340px] xl:w-[372px] xl:h-[460px] rounded-[20px]"
    >
      <div class="bg-white w-[300px] h-[270px] md:w-[704px] md:h-[340px] xl:w-[372px] xl:h-[460px] rounded-[20px]">
        <h3>{{ map.title }}</h3>
        <h5>{{ map.addr }}</h5>
        <div v-for="(info, idx) in infoList" :key="idx" class="flex gap-2">
          <div class="h-5">
            <img :src="info" alt="PHONE" />
            <p>{{ map.phone }}</p>
          </div>
        </div>
        <!-- <MainContactMapInfoCard /> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
// import InfoCard from '/components/main/contact/map/InfoCard';

const PHONE = 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/contact_map_phone.svg';
const TEL = 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/contact_map_tel.svg';
const EMAIL = 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/contact_map_mail.svg';
const TIME = 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/contact_map_time.svg';

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
</script>
