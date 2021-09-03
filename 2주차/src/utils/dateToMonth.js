export function dateToMonth(monthNames, date) {
  return monthNames[date.getMonth()] + ". " + date.getFullYear() + ".";
}
