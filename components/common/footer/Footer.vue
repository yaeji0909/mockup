<template>
  <footer class="bg-gray-bg flex justify-center">
    <div
      class="w-[335px] md:w-[960px] xl:w-[1200px] px-10 py-[30px] md:flex items-center md:gap-40"
    >
      <section>
        <div class="md:flex justify-between text-xs md:text-2xs xl:text-xs">
          <img
            src="https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/logo-black.svg"
            alt=""
          />
          <p>회사소개</p>
          <button>인재채용</button>
          <button>이용약관</button>
          <button>개인정보처리방침</button>
          <button>문의하기</button>
        </div>
        <div class="mt-6 text-gray-caption text-2xs xl:text-xs">
          <p>주식회사 네이처 모빌리티</p>
          <div>
            <span>제주본사</span>
            <span>
              제주특별자치도 제주시 첨단로 330, 3층 카이스트 친환경 스마트
              자동차 연구센터 D동 KMV10 (영평동, 세미양 빌딩)
            </span>
          </div>
          <div>
            <span>서울본사</span>
            <span>
              서울특별시 강남구 봉은사로 325, 9층 (논현동, 라임타워)
            </span>
          </div>
        </div>
        <div class="mt-8 text-gray-caption text-2xs xl:text-xs">
          <p>© Copyright 2018 - 2019 Nature Mobility | All Rights Reserved</p>
        </div>
      </section>
      <section class="md:flex md:flex-col md:justify-between items-end h-full">
        <div>Family Site select</div>
        <div class="flex gap-[8px] xl:gap-[15px]">
          <span
            class="w-9 h-9 md:w-7 md:h-7 xl:w-9 xl:h-9 bg-white rounded-full flex justify-center items-center filter drop-shadow[0px_1px_2px_rgba(14, 31, 53, 0.1)]"
          >
            <img
              class="w-4 h-4 md:w-3 md:h-3 xl:w-4 xl:h-4"
              :src="NAVER"
              alt="NAVER"
            />
          </span>
          <span
            class="w-9 h-9 md:w-7 md:h-7 xl:w-9 xl:h-9 bg-white rounded-full flex justify-center items-center"
          >
            <img
              class="w-5 h-5 md:w-4 md:h-4 xl:w-5 xl:h-5"
              :src="INSTAGRAM"
              alt="INSTAGRAM"
            />
          </span>
          <div
            class="w-9 h-9 md:w-7 md:h-7 xl:w-9 xl:h-9 bg-white rounded-full flex justify-center items-center"
          >
            <img
              class="w-5 h-5 md:w-4 md:h-4 xl:w-5 xl:h-5"
              :src="FACEBOOK"
              alt="FACEBOOK"
            />
          </div>
          <div
            class="w-9 h-9 md:w-7 md:h-7 xl:w-9 xl:h-9 bg-white rounded-full flex justify-center items-center"
          >
            <img
              class="w-6 h-6 md:w-4 md:h-4 xl:w-6 xl:h-6"
              :src="YOUTUBE"
              alt="YOUTUBE"
            />
          </div>
        </div>
      </section>
    </div>
  </footer>
</template>

<script setup>
const NAVER =
  "https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/sns-naver.svg";
const INSTAGRAM =
  "https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/sns-instagram.svg";
const FACEBOOK =
  "https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/sns-facebook.svg";
const YOUTUBE =
  "https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/sns-youtube.svg";
</script>
