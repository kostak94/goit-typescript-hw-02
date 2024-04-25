/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Day {
  monday = "monday",
  tuesday = "tuesday",
  wednesday = "wednesday",
  thursday = "thursday",
  friday = "friday",
  saturday = "saturday",
  sunday = "sunday",
}

function isWeekend(weekday: Day): boolean {
  if (weekday === "saturday" || weekday === "sunday") return false;
  return true;
}

let day = isWeekend(Day.monday);
console.log(day);
