/**
 * 格式化时间显示为 yyyy-MM-dd HH:mm:ss
 * @param  d 
 * @returns 
 */
function format_date(d) {
  var newd = new Date(d);
  var mo = newd.getMonth() + 1;
  var s =
    newd.getFullYear() +
    "-" +
    zeroDisplay(mo) +
    "-" +
    zeroDisplay(newd.getDate()) +
    " " +
    zeroDisplay(newd.getHours()) +
    ":" +
    zeroDisplay(newd.getMinutes()) +
    ":" +
    zeroDisplay(newd.getSeconds());
  return s;
}


function zeroDisplay(num) {
  if (num < 10) {
    return "0" + num;
  } else {
    return "" + num;
  }
}

export default {
  format_date
}