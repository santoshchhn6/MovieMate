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

export const getFormatedDate = (date: string | null) => {
  if (date) {
    const d = new Date(date);
    return d.getDate() + " " + months[d.getMonth()] + ", " + d.getFullYear();
  } else {
    return "error";
  }
};

export const getFormatedTime = (time: number) => {
  const hour = Math.floor(time / 60);
  const min = time % 60;
  return hour + " HRS " + min + " MINS";
};

export const getAge = (birth: string, death?: string) => {
  if (birth) {
    const birthDate = new Date(birth);
    let monthDifference, age;
    if (death) {
      const deathDay = new Date(death);
      age = deathDay.getFullYear() - birthDate.getFullYear();
      monthDifference = deathDay.getMonth() - birthDate.getMonth();
      if (
        monthDifference < 0 ||
        (monthDifference === 0 && deathDay.getDate() < birthDate.getDate())
      ) {
        age--;
      }
    } else {
      const today = new Date();
      age = today.getFullYear() - birthDate.getFullYear();
      const monthDifference = today.getMonth() - birthDate.getMonth();
      if (
        monthDifference < 0 ||
        (monthDifference === 0 && today.getDate() < birthDate.getDate())
      ) {
        age--;
      }
    }

    return age;
  }
};
