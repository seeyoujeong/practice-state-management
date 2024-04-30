export const getMonthAndDate = (ISOTime: string) => {
  const [yearMonthDate] = ISOTime.split("T");
  const [, month, date] = yearMonthDate.split("-");

  return {
    month,
    date,
  };
};

export const getCurrentDate = () => {
  const offset = new Date().getTimezoneOffset() * 60 * 1000;
  const currentDate = new Date(Date.now() - offset).toISOString();

  return currentDate;
};
