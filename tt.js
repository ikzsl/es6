import { keyBy, get } from 'lodash';
import { eachDayOfInterval, format } from 'date-fns';

// BEGIN (write your solution here)
export default (values, startDate, endDate) => {
  const formatDate = (date) => format(new Date(date), "dd.MM.yyyy");

  const start = formatDate(startDate);
  const end = formatDate(endDate);

  let eachDays = eachDayOfInterval(
    { start: new Date(startDate), end: new Date(endDate) }
  ).slice();
  let days = [];
  eachDays.forEach((item) => days.push(format(new Date(item), "dd.MM.yyyy")));

  let result = [];
  class Point {
    constructor() {
      this.date;
      this.value = 0;
    }
  };

  days.forEach((item) => {
    const obj = new Point();
    obj.date = item;
    // obj.value = 0;
    values.forEach((el) => {
      if (el.date === obj.date) {
        obj.value = el.value;
      }
    });

    result.push(obj);
  });

  return result;
};
// END
