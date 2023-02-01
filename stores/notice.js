import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { total, noticeList } from '/components/notice/list/notice.json';

export const useNoticeStore = defineStore('notice', {
  state: () => ({
    noticeList: noticeList,
  }),
  actions: {},
});
