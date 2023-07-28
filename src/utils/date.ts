const months = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

export const getFormatedDate = (date: string) => {
  const d = new Date(date);
  return d.getDate() + " " + months[d.getMonth()] + ", " + d.getFullYear();
};

export const getFormatedTime = (time: number) => {
  const hour = Math.floor(time / 60);
  const min = time % 60;
  return hour + " HRS " + min + " MINS";
};
