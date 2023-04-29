const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const getFormatedDate = (date: string) => {
  const d = new Date(date);
  return d.getDate() + " " + months[d.getMonth()] + ", " + d.getFullYear();
};

// export const getFormatedTime=(time:number)=>{

// }
