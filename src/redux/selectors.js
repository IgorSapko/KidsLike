const getTasks = state => state.week.tasks;
const getGifts = state => state.week.gifts;
const getStartWeekDate = state => state.week.startWeekDate;

export default {
   getTasks,
   getGifts,
   getStartWeekDate
}