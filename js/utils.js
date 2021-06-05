/**
 * 格式化时间显示为 yyyy-MM-dd HH:mm:ss
 * @param  d 
 * @returns 
 */
function format_date(d) {
  var newd = new Date(d);
  var mo = newd.getMonth() + 1;
  if (mo < 10) {
    mo = "0" + mo;
  }
  var s =
    newd.getFullYear() +
    "-" +
    mo +
    "-" +
    newd.getDate() +
    " " +
    newd.getHours() +
    ":" +
    newd.getMinutes() +
    ":" +
    newd.getSeconds();
  return s;
}

export default {  
  format_date  
}  