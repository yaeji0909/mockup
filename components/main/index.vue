<template>
  <video class="absolute" muted autoplay loop>
    <source
      src="https://naturemobility.s3.ap-northeast-2.amazonaws.com/video/main_video.mp4"
      type="video/mp4"
    />
  </video>
  <div class="relative">
    <section class="title">
      <h1 class="text-4xl md:text-6xl xl:text-8xl font-bold text-white">
        누구든지, 어디든지
      </h1>
      <h1 class="text-4xl md:text-6xl xl:text-8xl font-bold text-white">
        기대 이상의
      </h1>
      <h1
        class="text-4xl md:text-6xl xl:text-8xl font-bold bg-gradient-to-r from-secondary-green to-gradient-aqua text-transparent bg-clip-text"
      >
        통합 모빌리티 플랫폼
      </h1>
    </section>
    <section class="sub-title mt-5">
      <p class="text-xs md:text-xl xl:text-2xl font-medium text-white">
        실시간으로 달라지는 교통상황까지 고려하여
      </p>
      <p class="text-xs md:text-xl xl:text-2xl font-medium text-white">
        목적지까지 최적의 이동수단으로 예약부터 결제까지
      </p>
      <p class="text-xs md:text-xl xl:text-2xl font-medium text-white">
        하나의 솔루션으로 가능한 통합 모빌리티 플랫폼 회사입니다.
      </p>
    </section>
    <section class="buttons mt-14 text-white">
      <button>버튼1</button>
      <button>버튼2</button>
    </section>
  </div>
</template>

<script setup>
import { gsap } from "gsap";

// let tl = gsap.timeline(); //create the timeline
// console.log("tl", tl);
// tl.to(".title", { y: 150 }) //start sequencing
//   .to(".sub-title", { y: 100, ease: "elastic" })
//   .to(".buttons", { y: 50, ease: "elastic" });
// let tween = gsap.to(".class", { rotation: 360, duration: 5, ease: "elastic" });
</script>
