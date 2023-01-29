<template>
  <ClientOnly>
    <footer class="bg-gray-bg px-10 py-[30px]">
      <div
        class="md:flex-col md:items-center w-[335px] md:w-[710px] xl:w-[1200px] m-auto"
      >
        <section class="md:flex md:justify-between">
          <div
            class="md:flex md:justify-between md:gap-10 text-xs md:text-2xs xl:text-xs"
          >
            <img
              class="w-[184px] md:w-[120px] xl:w-[184px]"
              :src="NATURE_LOGO"
              alt="NATURE_LOGO"
            />
            <div class="flex gap-4 mt-7 md:mt-0">
              <CommonFooterSelectBox title="회사소개" />
              <!-- <button>{{ $t('footer.company') }}</button> -->
              <button>{{ $t('footer.recruit') }}</button>
              <button>{{ $t('footer.condition') }}</button>
              <button>{{ $t('footer.privacy') }}</button>
            </div>
            <div class="mt-5 md:mt-0">
              <button
                class="border border-black rounded-full px-[20px] py-[5px]"
                @click="open = true"
              >
                {{ $t('footer.contact') }}
              </button>
            </div>
          </div>
          <div class="mt-11 md:mt-0">
            <button>FAMILY SITE</button>
          </div>
        </section>
        <section
          v-if="largerThanSm"
          class="text-gray-caption text-xs md:text-2xs xl:text-xs mt-6"
        >
          <div>{{ $t('footer.name') }}</div>
          <div class="flex gap-[10px] mt-3 mb-1">
            <p>{{ $t('footer.jeju') }}</p>
            <p>{{ $t('footer.jejuAddr') }}</p>
          </div>
          <div class="flex gap-[10px]">
            <p>{{ $t('footer.seoul') }}</p>
            <p>{{ $t('footer.seoulAddr') }}</p>
          </div>
        </section>
        <section
          class="text-gray-caption text-xs md:text-2xs xl:text-xs mt-8 flex flex-col-reverse md:flex-row md:justify-between md:items-center"
        >
          <p>{{ $t('footer.copyright') }}</p>
          <div class="flex gap-[10px] xl:gap-[15px] mb-5 md:mb-0">
            <button
              class="w-9 h-9 md:w-7 md:h-7 xl:w-9 xl:h-9 bg-white rounded-full flex justify-center items-center drop-shadow"
            >
              <img
                class="w-4 h-4 md:w-3 md:h-3 xl:w-4 xl:h-4"
                :src="NAVER"
                alt="NAVER"
              />
            </button>
            <button
              class="w-9 h-9 md:w-7 md:h-7 xl:w-9 xl:h-9 bg-white rounded-full flex justify-center items-center drop-shadow"
            >
              <img
                class="w-5 h-5 md:w-4 md:h-4 xl:w-5 xl:h-5"
                :src="INSTAGRAM"
                alt="INSTAGRAM"
              />
            </button>
            <button
              class="w-9 h-9 md:w-7 md:h-7 xl:w-9 xl:h-9 bg-white rounded-full flex justify-center items-center drop-shadow"
            >
              <img
                class="w-5 h-5 md:w-4 md:h-4 xl:w-5 xl:h-5"
                :src="FACEBOOK"
                alt="FACEBOOK"
              />
            </button>
            <button
              class="w-9 h-9 md:w-7 md:h-7 xl:w-9 xl:h-9 bg-white rounded-full flex justify-center items-center drop-shadow"
            >
              <img
                class="w-6 h-6 md:w-4 md:h-4 xl:w-6 xl:h-6"
                :src="YOUTUBE"
                alt="YOUTUBE"
              />
            </button>
          </div>
        </section>
      </div>
    </footer>
    <section
      v-if="open"
      class="absolute z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <CommonDialogContact @close="open = false" />
    </section>
  </ClientOnly>
</template>

<script setup>
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';

const NATURE_LOGO =
  'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/logo-black.svg';
const NAVER =
  'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/sns-naver.svg';
const INSTAGRAM =
  'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/sns-instagram.svg';
const FACEBOOK =
  'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/sns-facebook.svg';
const YOUTUBE =
  'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/sns-youtube.svg';

const breakpoints = useBreakpoints(breakpointsTailwind);
const largerThanSm = breakpoints.greater('sm'); // only larger than sm

let open = ref(false);
</script>
