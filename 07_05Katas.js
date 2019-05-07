//Do I get a bonus?
/* Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.
If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.
Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS and Java)*/
function bonusTime(salary, bonus) {
  if (bonus === true) {
    return "\u00A3" + salary * 10
  };
  return "\u00A3" + salary;
}

//or
function bonusTime(salary, bonus) {
  return '£' + salary * (bonus ? 10 : 1);
}