const today = new Date();

const compareDates = (
  init_date,
  end_date,
  year,
  today
) => {
  const initDateMonthDay = getMonthsAndDay(init_date);
  const initDate = new Date(year, initDateMonthDay.month, initDateMonthDay.day);

  const endDateMonthDay = getMonthsAndDay(end_date);
  const endDate = new Date(year, endDateMonthDay.month, endDateMonthDay.day);

  return (
    today.getTime() >= initDate.getTime() &&
    today.getTime() <= endDate.getTime()
  );
};

const getMonthsAndDay = (date)=> {
  const dateToNumber = date.split("-");
  const dateObject = {
    day: parseInt(dateToNumber[0]),
    month: parseInt(dateToNumber[1]) - 1,
  };

  return dateObject;
};

export const compareDatesForOrder = (a, b) => {
  if (a.init_date && b.init_date) {
    const initDateAMonthDay = getMonthsAndDay(a.init_date);
    const initDateA = new Date(
      today.getFullYear(),
      initDateAMonthDay.month,
      initDateAMonthDay.day
    );

    const initDateBMonthDay = getMonthsAndDay(b.init_date);
    const initDateB = new Date(
      today.getFullYear(),
      initDateBMonthDay.month,
      initDateBMonthDay.day
    );

    if (initDateA.getTime() < initDateB.getTime()) {
      return -1;
    }
    if (initDateA.getTime() > initDateB.getTime()) {
      return 1;
    }
    return 0;
  }

  return 0;
};
