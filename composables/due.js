/**
 * d-day 계산 (endAt - today)
 */
export const diffDay = (due) => {
  const diff = new Date(due) - new Date();
  const remainDay = Math.floor(diff / (1000 * 60 * 60 * 24));
  return `${remainDay}`;
};
