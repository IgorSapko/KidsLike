const getTasks = state => state.week.tasks;
const getGifts = state => state.week.gifts;
const getStartWeekDate = state => state.week.startWeekDate;
const getIsLoading = state => state.loader;

export default {
   getTasks,
   getGifts,
   getStartWeekDate,
   getIsLoading
}