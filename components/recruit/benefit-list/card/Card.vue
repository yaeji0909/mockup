<template>
  <div class="enable-animation marquee--hover-pause pt-[80px] xl:pt-[100px]">
    <!-- 윗줄 -->
    <section class="marquee">
      <div class="marquee__content">
        <div
          class="flex flex-col justify-center items-center w-[210px] h-[210px] md:w-[245px] md:h-[245px] lg:w-[280px] lg:h-[280px] xl:w-[350px] xl:h-[350px] bg-gray-bg rounded-[12px] md:rounded-[14px] lg:rounded-[16px] xl:rounded-[20px]"
        >
          <nuxt-img
            src="https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/benefit_01.svg"
            class="w-[120px] h-[120px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px] xl:w-[200px] xl:h-[160px]"
          />
          <div>
            <h4 class="text-2xs md:text-2xl font-medium">
              {{ $t('recruit.benefit.outfit') }}
            </h4>
            <h5
              class="text-[10px] md:text-base pt-[3px] md:pt-[4px] xl:pt-[5px] whitespace-pre-line leading-4"
            >
              {{ $t('recruit.benefit.outfitDesc') }}
            </h5>
          </div>
        </div>
        <div
          class="flex flex-col justify-center items-center w-[210px] h-[210px] md:w-[245px] md:h-[245px] lg:w-[280px] lg:h-[280px] xl:w-[350px] xl:h-[350px] bg-gray-bg rounded-[12px] md:rounded-[14px] lg:rounded-[16px] xl:rounded-[20px]"
        >
          <nuxt-img
            src="https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/benefit_02.svg"
            class="w-[120px] h-[120px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px] xl:w-[200px] xl:h-[160px]"
          />
          <div>
            <h4 class="text-2xs md:text-2xl font-medium">
              {{ $t('recruit.benefit.exciting') }}
            </h4>
            <h5
              class="text-[10px] md:text-base pt-[3px] md:pt-[4px] xl:pt-[5px] whitespace-pre-line leading-4"
            >
              {{ $t('recruit.benefit.excitingDesc') }}
            </h5>
          </div>
        </div>
        <div
          class="flex flex-col justify-center items-center w-[210px] h-[210px] md:w-[245px] md:h-[245px] lg:w-[280px] lg:h-[280px] xl:w-[350px] xl:h-[350px] bg-gray-bg rounded-[12px] md:rounded-[14px] lg:rounded-[16px] xl:rounded-[20px]"
        >
          <nuxt-img
            src="https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/benefit_03.svg"
            class="w-[120px] h-[120px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px] xl:w-[200px] xl:h-[160px]"
          />
          <div>
            <h4 class="text-2xs md:text-2xl font-medium">
              {{ $t('recruit.benefit.vacation') }}
            </h4>
            <h5
              class="text-[10px] md:text-base pt-[3px] md:pt-[4px] xl:pt-[5px] whitespace-pre-line leading-4"
            >
              {{ $t('recruit.benefit.vacationDesc') }}
            </h5>
          </div>
        </div>
        <div
          class="flex flex-col justify-center items-center w-[210px] h-[210px] md:w-[245px] md:h-[245px] lg:w-[280px] lg:h-[280px] xl:w-[350px] xl:h-[350px] bg-gray-bg rounded-[12px] md:rounded-[14px] lg:rounded-[16px] xl:rounded-[20px]"
        >
          <nuxt-img
            src="https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/benefit_04.svg"
            class="w-[120px] h-[120px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px] xl:w-[200px] xl:h-[160px]"
          />
          <div>
            <h4 class="text-2xs md:text-2xl font-medium">
              {{ $t('recruit.benefit.vacation') }}
            </h4>
            <h5
              class="text-[10px] md:text-base pt-[3px] md:pt-[4px] xl:pt-[5px] whitespace-pre-line leading-4"
            >
              {{ $t('recruit.benefit.vacationDesc') }}
            </h5>
          </div>
        </div>
        <div
          class="flex flex-col justify-center items-center w-[210px] h-[210px] md:w-[245px] md:h-[245px] lg:w-[280px] lg:h-[280px] xl:w-[350px] xl:h-[350px] bg-gray-bg rounded-[12px] md:rounded-[14px] lg:rounded-[16px] xl:rounded-[20px]"
        >
          <nuxt-img
            src="https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/benefit_05.svg"
            class="w-[120px] h-[120px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px] xl:w-[200px] xl:h-[160px]"
          />
          <div>
            <h4 class="text-2xs md:text-2xl font-medium">
              {{ $t('recruit.benefit.commute') }}
            </h4>
            <h5
              class="text-[10px] md:text-base pt-[3px] md:pt-[4px] xl:pt-[5px] whitespace-pre-line leading-4"
            >
              {{ $t('recruit.benefit.commuteDesc') }}
            </h5>
          </div>
        </div>
        <div
          class="flex flex-col justify-center items-center w-[210px] h-[210px] md:w-[245px] md:h-[245px] lg:w-[280px] lg:h-[280px] xl:w-[350px] xl:h-[350px] bg-gray-bg rounded-[12px] md:rounded-[14px] lg:rounded-[16px] xl:rounded-[20px]"
        >
          <nuxt-img
            src="https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/benefit_06.svg"
            class="w-[120px] h-[120px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px] xl:w-[200px] xl:h-[160px]"
          />
          <div>
            <h4 class="text-2xs md:text-2xl font-medium">
              {{ $t('recruit.benefit.early') }}
            </h4>
            <h5
              class="text-[10px] md:text-base pt-[3px] md:pt-[4px] xl:pt-[5px] whitespace-pre-line leading-4"
            >
              {{ $t('recruit.benefit.earlyDesc') }}
            </h5>
          </div>
        </div>
        <div
          class="flex flex-col justify-center items-center w-[210px] h-[210px] md:w-[245px] md:h-[245px] lg:w-[280px] lg:h-[280px] xl:w-[350px] xl:h-[350px] bg-gray-bg rounded-[12px] md:rounded-[14px] lg:rounded-[16px] xl:rounded-[20px]"
        >
          <nuxt-img
            src="https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/benefit_07.svg"
            class="w-[120px] h-[120px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px] xl:w-[200px] xl:h-[160px]"
          />
          <div>
            <h4 class="text-2xs md:text-2xl font-medium">
              {{ $t('recruit.benefit.snack') }}
            </h4>
            <h5
              class="text-[10px] md:text-base pt-[3px] md:pt-[4px] xl:pt-[5px] whitespace-pre-line leading-4"
            >
              {{ $t('recruit.benefit.snackDesc') }}
            </h5>
          </div>
        </div>
      </div>

      <div aria-hidden="true" class="marquee__content">
        <div
          class="flex flex-col justify-center items-center w-[210px] h-[210px] md:w-[245px] md:h-[245px] lg:w-[280px] lg:h-[280px] xl:w-[350px] xl:h-[350px] bg-gray-bg rounded-[12px] md:rounded-[14px] lg:rounded-[16px] xl:rounded-[20px]"
        >
          <nuxt-img
            src="https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/benefit_01.svg"
            class="w-[120px] h-[120px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px] xl:w-[200px] xl:h-[160px]"
          />
          <div>
            <h4 class="text-2xs md:text-2xl font-medium">
              {{ $t('recruit.benefit.outfit') }}
            </h4>
            <h5
              class="text-[10px] md:text-base pt-[3px] md:pt-[4px] xl:pt-[5px] whitespace-pre-line leading-4"
            >
              {{ $t('recruit.benefit.outfitDesc') }}
            </h5>
          </div>
        </div>
        <div
          class="flex flex-col justify-center items-center w-[210px] h-[210px] md:w-[245px] md:h-[245px] lg:w-[280px] lg:h-[280px] xl:w-[350px] xl:h-[350px] bg-gray-bg rounded-[12px] md:rounded-[14px] lg:rounded-[16px] xl:rounded-[20px]"
        >
          <nuxt-img
            src="https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/benefit_02.svg"
            class="w-[120px] h-[120px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px] xl:w-[200px] xl:h-[160px]"
          />
          <div>
            <h4 class="text-2xs md:text-2xl font-medium">
              {{ $t('recruit.benefit.exciting') }}
            </h4>
            <h5
              class="text-[10px] md:text-base pt-[3px] md:pt-[4px] xl:pt-[5px] whitespace-pre-line leading-4"
            >
              {{ $t('recruit.benefit.excitingDesc') }}
            </h5>
          </div>
        </div>
        <div
          class="flex flex-col justify-center items-center w-[210px] h-[210px] md:w-[245px] md:h-[245px] lg:w-[280px] lg:h-[280px] xl:w-[350px] xl:h-[350px] bg-gray-bg rounded-[12px] md:rounded-[14px] lg:rounded-[16px] xl:rounded-[20px]"
        >
          <nuxt-img
            src="https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/benefit_03.svg"
            class="w-[120px] h-[120px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px] xl:w-[200px] xl:h-[160px]"
          />
          <div>
            <h4 class="text-2xs md:text-2xl font-medium">
              {{ $t('recruit.benefit.vacation') }}
            </h4>
            <h5
              class="text-[10px] md:text-base pt-[3px] md:pt-[4px] xl:pt-[5px] whitespace-pre-line leading-4"
            >
              {{ $t('recruit.benefit.vacationDesc') }}
            </h5>
          </div>
        </div>
        <div
          class="flex flex-col justify-center items-center w-[210px] h-[210px] md:w-[245px] md:h-[245px] lg:w-[280px] lg:h-[280px] xl:w-[350px] xl:h-[350px] bg-gray-bg rounded-[12px] md:rounded-[14px] lg:rounded-[16px] xl:rounded-[20px]"
        >
          <nuxt-img
            src="https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/benefit_04.svg"
            class="w-[120px] h-[120px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px] xl:w-[200px] xl:h-[160px]"
          />
          <div>
            <h4 class="text-2xs md:text-2xl font-medium">
              {{ $t('recruit.benefit.vacation') }}
            </h4>
            <h5
              class="text-[10px] md:text-base pt-[3px] md:pt-[4px] xl:pt-[5px] whitespace-pre-line leading-4"
            >
              {{ $t('recruit.benefit.vacationDesc') }}
            </h5>
          </div>
        </div>
        <div
          class="flex flex-col justify-center items-center w-[210px] h-[210px] md:w-[245px] md:h-[245px] lg:w-[280px] lg:h-[280px] xl:w-[350px] xl:h-[350px] bg-gray-bg rounded-[12px] md:rounded-[14px] lg:rounded-[16px] xl:rounded-[20px]"
        >
          <nuxt-img
            src="https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/benefit_05.svg"
            class="w-[120px] h-[120px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px] xl:w-[200px] xl:h-[160px]"
          />
          <div>
            <h4 class="text-2xs md:text-2xl font-medium">
              {{ $t('recruit.benefit.commute') }}
            </h4>
            <h5
              class="text-[10px] md:text-base pt-[3px] md:pt-[4px] xl:pt-[5px] whitespace-pre-line leading-4"
            >
              {{ $t('recruit.benefit.commuteDesc') }}
            </h5>
          </div>
        </div>
        <div
          class="flex flex-col justify-center items-center w-[210px] h-[210px] md:w-[245px] md:h-[245px] lg:w-[280px] lg:h-[280px] xl:w-[350px] xl:h-[350px] bg-gray-bg rounded-[12px] md:rounded-[14px] lg:rounded-[16px] xl:rounded-[20px]"
        >
          <nuxt-img
            src="https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/benefit_06.svg"
            class="w-[120px] h-[120px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px] xl:w-[200px] xl:h-[160px]"
          />
          <div>
            <h4 class="text-2xs md:text-2xl font-medium">
              {{ $t('recruit.benefit.early') }}
            </h4>
            <h5
              class="text-[10px] md:text-base pt-[3px] md:pt-[4px] xl:pt-[5px] whitespace-pre-line leading-4"
            >
              {{ $t('recruit.benefit.earlyDesc') }}
            </h5>
          </div>
        </div>
        <div
          class="flex flex-col justify-center items-center w-[210px] h-[210px] md:w-[245px] md:h-[245px] lg:w-[280px] lg:h-[280px] xl:w-[350px] xl:h-[350px] bg-gray-bg rounded-[12px] md:rounded-[14px] lg:rounded-[16px] xl:rounded-[20px]"
        >
          <nuxt-img
            src="https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/benefit_07.svg"
            class="w-[120px] h-[120px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px] xl:w-[200px] xl:h-[160px]"
          />
          <div>
            <h4 class="text-2xs md:text-2xl font-medium">
              {{ $t('recruit.benefit.snack') }}
            </h4>
            <h5
              class="text-[10px] md:text-base pt-[3px] md:pt-[4px] xl:pt-[5px] whitespace-pre-line leading-4"
            >
              {{ $t('recruit.benefit.snackDesc') }}
            </h5>
          </div>
        </div>
      </div>
    </section>

    <!-- 아랫줄 -->
    <section
      class="marquee mt-[1rem] px-[105px] md:px-[122.5px] lg:px-[140px] xl:px-[175px]"
    >
      <div class="marquee__content">
        <div
          class="flex flex-col justify-center items-center w-[210px] h-[210px] md:w-[245px] md:h-[245px] lg:w-[280px] lg:h-[280px] xl:w-[350px] xl:h-[350px] bg-gray-bg rounded-[12px] md:rounded-[14px] lg:rounded-[16px] xl:rounded-[20px]"
        >
          <nuxt-img
            src="https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/benefit_08.svg"
            class="w-[120px] h-[120px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px] xl:w-[200px] xl:h-[160px]"
          />
          <div>
            <h4 class="text-2xs md:text-2xl font-medium">
              {{ $t('recruit.benefit.lunch') }}
            </h4>
            <h5
              class="text-[10px] md:text-base pt-[3px] md:pt-[4px] xl:pt-[5px] whitespace-pre-line leading-4"
            >
              {{ $t('recruit.benefit.lunchDesc') }}
            </h5>
          </div>
        </div>
        <div
          class="flex flex-col justify-center items-center w-[210px] h-[210px] md:w-[245px] md:h-[245px] lg:w-[280px] lg:h-[280px] xl:w-[350px] xl:h-[350px] bg-gray-bg rounded-[12px] md:rounded-[14px] lg:rounded-[16px] xl:rounded-[20px]"
        >
          <nuxt-img
            src="https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/benefit_09.svg"
            class="w-[120px] h-[120px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px] xl:w-[200px] xl:h-[160px]"
          />
          <div>
            <h4 class="text-2xs md:text-2xl font-medium">
              {{ $t('recruit.benefit.card') }}
            </h4>
            <h5
              class="text-[10px] md:text-base pt-[3px] md:pt-[4px] xl:pt-[5px] whitespace-pre-line leading-4"
            >
              {{ $t('recruit.benefit.cardDesc') }}
            </h5>
          </div>
        </div>
        <div
          class="flex flex-col justify-center items-center w-[210px] h-[210px] md:w-[245px] md:h-[245px] lg:w-[280px] lg:h-[280px] xl:w-[350px] xl:h-[350px] bg-gray-bg rounded-[12px] md:rounded-[14px] lg:rounded-[16px] xl:rounded-[20px]"
        >
          <nuxt-img
            src="https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/benefit_10.svg"
            class="w-[120px] h-[120px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px] xl:w-[200px] xl:h-[160px]"
          />
          <div>
            <h4 class="text-2xs md:text-2xl font-medium">
              {{ $t('recruit.benefit.selfDevelopement') }}
            </h4>
            <h5
              class="text-[10px] md:text-base pt-[3px] md:pt-[4px] xl:pt-[5px] whitespace-pre-line leading-4"
            >
              {{ $t('recruit.benefit.selfDevelopementDesc') }}
            </h5>
          </div>
        </div>
        <div
          class="flex flex-col justify-center items-center w-[210px] h-[210px] md:w-[245px] md:h-[245px] lg:w-[280px] lg:h-[280px] xl:w-[350px] xl:h-[350px] bg-gray-bg rounded-[12px] md:rounded-[14px] lg:rounded-[16px] xl:rounded-[20px]"
        >
          <nuxt-img
            src="https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/benefit_11.svg"
            class="w-[120px] h-[120px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px] xl:w-[200px] xl:h-[160px]"
          />
          <div>
            <h4 class="text-2xs md:text-2xl font-medium">
              {{ $t('recruit.benefit.expenditure') }}
            </h4>
            <h5
              class="text-[10px] md:text-base pt-[3px] md:pt-[4px] xl:pt-[5px] whitespace-pre-line leading-4"
            >
              {{ $t('recruit.benefit.expenditureDesc') }}
            </h5>
          </div>
        </div>
        <div
          class="flex flex-col justify-center items-center w-[210px] h-[210px] md:w-[245px] md:h-[245px] lg:w-[280px] lg:h-[280px] xl:w-[350px] xl:h-[350px] bg-gray-bg rounded-[12px] md:rounded-[14px] lg:rounded-[16px] xl:rounded-[20px]"
        >
          <nuxt-img
            src="https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/benefit_12.svg"
            class="w-[120px] h-[120px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px] xl:w-[200px] xl:h-[160px]"
          />
          <div>
            <h4 class="text-2xs md:text-2xl font-medium">
              {{ $t('recruit.benefit.holiday') }}
            </h4>
            <h5
              class="text-[10px] md:text-base pt-[3px] md:pt-[4px] xl:pt-[5px] whitespace-pre-line leading-4"
            >
              {{ $t('recruit.benefit.holidayDesc') }}
            </h5>
          </div>
        </div>
        <div
          class="flex flex-col justify-center items-center w-[210px] h-[210px] md:w-[245px] md:h-[245px] lg:w-[280px] lg:h-[280px] xl:w-[350px] xl:h-[350px] bg-gray-bg rounded-[12px] md:rounded-[14px] lg:rounded-[16px] xl:rounded-[20px]"
        >
          <nuxt-img
            src="https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/benefit_13.svg"
            class="w-[120px] h-[120px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px] xl:w-[200px] xl:h-[160px]"
          />
          <div>
            <h4 class="text-2xs md:text-2xl font-medium">
              {{ $t('recruit.benefit.discount') }}
            </h4>
            <h5
              class="text-[10px] md:text-base pt-[3px] md:pt-[4px] xl:pt-[5px] whitespace-pre-line leading-4"
            >
              {{ $t('recruit.benefit.discountDesc') }}
            </h5>
          </div>
        </div>
        <div
          class="flex flex-col justify-center items-center w-[210px] h-[210px] md:w-[245px] md:h-[245px] lg:w-[280px] lg:h-[280px] xl:w-[350px] xl:h-[350px] bg-gray-bg rounded-[12px] md:rounded-[14px] lg:rounded-[16px] xl:rounded-[20px]"
        >
          <nuxt-img
            src="https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/benefit_14.svg"
            class="w-[120px] h-[120px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px] xl:w-[200px] xl:h-[160px]"
          />
          <div>
            <h4 class="text-2xs md:text-2xl font-medium">
              {{ $t('recruit.benefit.more') }}
            </h4>
            <h5
              class="text-[10px] md:text-base pt-[3px] md:pt-[4px] xl:pt-[5px] whitespace-pre-line leading-4"
            >
              {{ $t('recruit.benefit.moreDesc') }}
            </h5>
          </div>
        </div>
      </div>

      <div aria-hidden="true" class="marquee__content">
        <div
          class="flex flex-col justify-center items-center w-[210px] h-[210px] md:w-[245px] md:h-[245px] lg:w-[280px] lg:h-[280px] xl:w-[350px] xl:h-[350px] bg-gray-bg rounded-[12px] md:rounded-[14px] lg:rounded-[16px] xl:rounded-[20px]"
        >
          <nuxt-img
            src="https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/benefit_08.svg"
            class="w-[120px] h-[120px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px] xl:w-[200px] xl:h-[160px]"
          />
          <div>
            <h4 class="text-2xs md:text-2xl font-medium">
              {{ $t('recruit.benefit.lunch') }}
            </h4>
            <h5
              class="text-[10px] md:text-base pt-[3px] md:pt-[4px] xl:pt-[5px] whitespace-pre-line leading-4"
            >
              {{ $t('recruit.benefit.lunchDesc') }}
            </h5>
          </div>
        </div>
        <div
          class="flex flex-col justify-center items-center w-[210px] h-[210px] md:w-[245px] md:h-[245px] lg:w-[280px] lg:h-[280px] xl:w-[350px] xl:h-[350px] bg-gray-bg rounded-[12px] md:rounded-[14px] lg:rounded-[16px] xl:rounded-[20px]"
        >
          <nuxt-img
            src="https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/benefit_09.svg"
            class="w-[120px] h-[120px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px] xl:w-[200px] xl:h-[160px]"
          />
          <div>
            <h4 class="text-2xs md:text-2xl font-medium">
              {{ $t('recruit.benefit.card') }}
            </h4>
            <h5
              class="text-[10px] md:text-base pt-[3px] md:pt-[4px] xl:pt-[5px] whitespace-pre-line leading-4"
            >
              {{ $t('recruit.benefit.cardDesc') }}
            </h5>
          </div>
        </div>
        <div
          class="flex flex-col justify-center items-center w-[210px] h-[210px] md:w-[245px] md:h-[245px] lg:w-[280px] lg:h-[280px] xl:w-[350px] xl:h-[350px] bg-gray-bg rounded-[12px] md:rounded-[14px] lg:rounded-[16px] xl:rounded-[20px]"
        >
          <nuxt-img
            src="https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/benefit_10.svg"
            class="w-[120px] h-[120px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px] xl:w-[200px] xl:h-[160px]"
          />
          <div>
            <h4 class="text-2xs md:text-2xl font-medium">
              {{ $t('recruit.benefit.selfDevelopement') }}
            </h4>
            <h5
              class="text-[10px] md:text-base pt-[3px] md:pt-[4px] xl:pt-[5px] whitespace-pre-line leading-4"
            >
              {{ $t('recruit.benefit.selfDevelopementDesc') }}
            </h5>
          </div>
        </div>
        <div
          class="flex flex-col justify-center items-center w-[210px] h-[210px] md:w-[245px] md:h-[245px] lg:w-[280px] lg:h-[280px] xl:w-[350px] xl:h-[350px] bg-gray-bg rounded-[12px] md:rounded-[14px] lg:rounded-[16px] xl:rounded-[20px]"
        >
          <nuxt-img
            src="https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/benefit_11.svg"
            class="w-[120px] h-[120px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px] xl:w-[200px] xl:h-[160px]"
          />
          <div>
            <h4 class="text-2xs md:text-2xl font-medium">
              {{ $t('recruit.benefit.expenditure') }}
            </h4>
            <h5
              class="text-[10px] md:text-base pt-[3px] md:pt-[4px] xl:pt-[5px] whitespace-pre-line leading-4"
            >
              {{ $t('recruit.benefit.expenditureDesc') }}
            </h5>
          </div>
        </div>
        <div
          class="flex flex-col justify-center items-center w-[210px] h-[210px] md:w-[245px] md:h-[245px] lg:w-[280px] lg:h-[280px] xl:w-[350px] xl:h-[350px] bg-gray-bg rounded-[12px] md:rounded-[14px] lg:rounded-[16px] xl:rounded-[20px]"
        >
          <nuxt-img
            src="https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/benefit_12.svg"
            class="w-[120px] h-[120px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px] xl:w-[200px] xl:h-[160px]"
          />
          <div>
            <h4 class="text-2xs md:text-2xl font-medium">
              {{ $t('recruit.benefit.holiday') }}
            </h4>
            <h5
              class="text-[10px] md:text-base pt-[3px] md:pt-[4px] xl:pt-[5px] whitespace-pre-line leading-4"
            >
              {{ $t('recruit.benefit.holidayDesc') }}
            </h5>
          </div>
        </div>
        <div
          class="flex flex-col justify-center items-center w-[210px] h-[210px] md:w-[245px] md:h-[245px] lg:w-[280px] lg:h-[280px] xl:w-[350px] xl:h-[350px] bg-gray-bg rounded-[12px] md:rounded-[14px] lg:rounded-[16px] xl:rounded-[20px]"
        >
          <nuxt-img
            src="https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/benefit_13.svg"
            class="w-[120px] h-[120px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px] xl:w-[200px] xl:h-[160px]"
          />
          <div>
            <h4 class="text-2xs md:text-2xl font-medium">
              {{ $t('recruit.benefit.discount') }}
            </h4>
            <h5
              class="text-[10px] md:text-base pt-[3px] md:pt-[4px] xl:pt-[5px] whitespace-pre-line leading-4"
            >
              {{ $t('recruit.benefit.discountDesc') }}
            </h5>
          </div>
        </div>
        <div
          class="flex flex-col justify-center items-center w-[210px] h-[210px] md:w-[245px] md:h-[245px] lg:w-[280px] lg:h-[280px] xl:w-[350px] xl:h-[350px] bg-gray-bg rounded-[12px] md:rounded-[14px] lg:rounded-[16px] xl:rounded-[20px]"
        >
          <nuxt-img
            src="https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/benefit_14.svg"
            class="w-[120px] h-[120px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px] xl:w-[200px] xl:h-[160px]"
          />
          <div>
            <h4 class="text-2xs md:text-2xl font-medium">
              {{ $t('recruit.benefit.more') }}
            </h4>
            <h5
              class="text-[10px] md:text-base pt-[3px] md:pt-[4px] xl:pt-[5px] whitespace-pre-line leading-4"
            >
              {{ $t('recruit.benefit.moreDesc') }}
            </h5>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Marquee styles */
.marquee {
  --gap: 1rem;
  position: relative;
  display: flex;
  overflow: hidden;
  user-select: none;
  gap: var(--gap);
}

.marquee__content {
  flex-shrink: 0;
  display: flex;
  justify-content: space-around;
  gap: var(--gap);
  min-width: 100%;
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% - var(--gap)));
  }
}

/* Pause animation when reduced-motion is set */
@media (prefers-reduced-motion: reduce) {
  .marquee__content {
    animation-play-state: paused !important;
  }
}

/* Enable animation */
.enable-animation .marquee__content {
  animation: scroll 20s linear infinite;
}

/* Pause on hover */
.marquee--hover-pause:hover .marquee__content {
  animation-play-state: paused;
}
</style>
