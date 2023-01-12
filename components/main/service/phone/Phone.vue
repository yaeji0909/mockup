<template>
  <ClientOnly>
    <div
      class="relative bg-phone h-[500px] md:h-[700px] container bg-contain bg-center bg-no-repeat flex-col justify-center items-center"
    >
      <!-- <div
        class="bg-phone h-full xl:container bg-[length:230px_500px] bg-center bg-no-repeat flex justify-center items-center"
      > -->
      <MainServiceCard />
      <div class="px-1">
        <CommonButtonShortcutBtn
          :text="$t('button.moreDetail')"
          color="gray-caption"
          hoverColor="black"
          class="text-center m-auto"
        />
        <!-- <CommonButtonShortcutBtn
          :text="$t('button.moreDetail')"
          color="gray-caption"
          hoverColor="black"
          class="text-center m-auto pt-10 absolute left-[35%] md:left-[43%] lg:left-[46%] top-[70%]"
        /> -->
      </div>
    </div>
  </ClientOnly>
</template>

<script setup></script>
