export function dateToMonth(monthNames, date) {
  console.log(date);
  return monthNames[date.getMonth()] + ". " + date.getFullYear() + ".";
}
