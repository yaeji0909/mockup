<template>
  <div class="flex flex-col xl:flex-row justify-center items-center gap-10">
    <div
      v-for="map in mapList"
      :key="map.title"
      class="relative flex justify-center items-end p-5 w-[340px] h-[460px] md:w-[704px] md:h-[340px] xl:w-[372px] xl:h-[460px]"
    >
      <GMapMap
        :center="map.center"
        :zoom="17"
        class="absolute z-20 bottom-0 w-[340px] h-[460px] md:w-[704px] md:h-[340px] xl:w-[372px] xl:h-[460px] rounded-[20px] overflow-hidden"
      >
        <GMapMarker :key="map.title" :position="map.center" />
      </GMapMap>
      <div
        class="info-box relative absolute z-20 bottom-0 bg-white w-[340px] md:w-[704px] xl:w-[372px] rounded-[20px] px-5 py-[25px]"
      >
        <div v-if="!map.hover" class="absolute top-[-35%] left-[40%]">
          <img :src="PIN" alt="PIN" />
        </div>
        <h3 class="text-xl :text-2xl font-bold">{{ map.title }}</h3>
        <h5 class="text-xs pt-5">{{ map.addr[0] }}</h5>
        <h5 v-if="map.addr[1]" class="text-xs pt-3">{{ map.addr[1] }}</h5>
        <section v-if="map.hover" class="bg-gray-bg rounded-[10px] mt-[25px] px-[12px] py-[15px]">
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

const PHONE = 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/contact_map_phone.svg';
const TEL = 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/contact_map_tel.svg';
const EMAIL = 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/contact_map_mail.svg';
const TIME = 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/contact_map_time.svg';
const PIN = 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/contact_pin_icon.svg';

const { t } = useI18n();

const mapList = ref([
  {
    title: t('contact.headOffice'),
    addr: [t('contact.headOfficeAddr')],
    phone: '064 759 8186',
    tel: '070 4009 2030',
    email: '?????? ??????',
    time: t('contact.headOfficeTime'),
    hover: false,
    center: { lat: 33.442416, lng: 126.571329 },
  },
  {
    title: t('contact.branchOffice'),
    addr: [t('contact.branchOfficeAddr'), t('contact.branchOfficeAddr2')],
    phone: '02 6929 2401',
    tel: '070 4009 2030',
    email: '?????? ??????',
    time: t('contact.branchOfficeTime'),
    hover: false,
    center: { lat: 37.510219, lng: 127.042997 },
  },
  {
    title: t('contact.helmetOffice'),
    addr: [t('contact.helmetOfficeAddr')],
    phone: '02 6929 2401',
    tel: '070 4848 5497',
    email: '??????????????? ??????',
    time: t('contact.helmetOfficeTime'),
    hover: false,
    center: { lat: 37.48029, lng: 126.884312 },
  },
]);

/**
 * hover event
 */
onMounted(() => {
  const el = document.querySelectorAll('.info-box');

  el.forEach(el => {
    if (el.textContent.includes('??????')) {
      el.classList.add('jeju');
    } else if (el.textContent.includes('??????')) {
      el.classList.add('seoul');
    } else if (el.textContent.includes('??????')) {
      el.classList.add('helmet');
    }
  });

  const jeju = document.querySelector('.jeju');
  jeju.addEventListener('mouseenter', el => {
    mapList.value[0].hover = true;
  });
  jeju.addEventListener('mouseleave', el => {
    mapList.value[0].hover = false;
  });

  const seoul = document.querySelector('.seoul');
  seoul.addEventListener('mouseenter', el => {
    mapList.value[1].hover = true;
  });
  seoul.addEventListener('mouseleave', el => {
    mapList.value[1].hover = false;
  });

  const helmet = document.querySelector('.helmet');
  helmet.addEventListener('mouseenter', el => {
    mapList.value[2].hover = true;
  });
  helmet.addEventListener('mouseleave', el => {
    mapList.value[2].hover = false;
  });
});
</script>
