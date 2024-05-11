export const sliceYearAndMonth = (selectedAt) => {
  const sliced = new Date(selectedAt).toISOString().slice(0, 7).replace('T', ' ')
  return sliced
}

export const roundTo3Decimals = (nValue, dValue) => {
  const roundTo = +('1'.padEnd(dValue + 1, '0'))
  const result = Math.round(nValue * roundTo) / roundTo

  return result;
};

export const sumAll = (object) => {
  const sum = object.reduce((s, k) => {
    return s + parseFloat(k.consumptionPerMonth);
  }, 0);

  return roundTo3Decimals(sum, 3);
};

export const removeDuplicateDate = (object) => {
  const noDuplicate = object.reduce((s, k) => {
    return s.includes(k) ? s : [...s, k];
  }, []);

  return noDuplicate;
};

export const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

export const getRandomRgb =()=> {
  var num = Math.floor(0xffffff * Math.random()).toFixed();
  var r = num >> 16;
  var g = (num >> 8) & 255;
  var b = num & 255;
  return `rgb(${r}, ${g}, ${b},.95)`;
}


export const daysInMonth = (selectedDate) => {
    const year = selectedDate.getFullYear()
    const month = selectedDate.getMonth() + 1
    const days = new Date(year, month, 0).getDate()
    return days
}