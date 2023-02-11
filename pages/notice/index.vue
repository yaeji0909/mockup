<template>
  <div class="text-center">
    <CommonNavigationBar
      class="fixed z-50 w-screen"
      :elementTop="elementTop"
      color="white"
    />
    <main>
      <section>
        <h1
          class="text-4xl md:text-6xl xl:text-7xl font-bold whitespace-pre-line"
        >
          Notice
        </h1>
        <h5 class="text-base xl:text-xl mt-[10px]">{{ $t('notice.sub') }}</h5>
      </section>
      <section>
        <Notice />
      </section>
    </main>
    <div class="mt-[100px]">
      <CommonFooter />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
