export default function () {
// // 创建一个Date对象，表示当前时间
// const today = new Date();

// // 获取今天是星期几
// let dayOfWeek = today.getDay(); 
// let weekDays = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// let weekDay = weekDays[dayOfWeek];
// // 获取今天的日期
// const year = today.getFullYear(); // 四位数的年份
// let month = today.getMonth() + 1; // 月份是0-11表示，所以要加1
// let date = today.getDate(); // 日期是1-31表示

// let res=[]
// if(weekDay=="Sunday"){
// for(let i=1;i<=6;i++){
//     date--
//     res.push(date)
// }
// }else if(weekDay=="Monday"){
//     for(let i=1;i<=6;i++){
//         date++
//         res.push(date)
//     }
// }else if(weekDay=="Tuesday"){
//     for(let i=1;i<=5;i++){
//         date++
//         res.push(date)
//     }
//     res.unshift(date-1)
// }else if(weekDay=="Wednesday"){
//     for(let i=1;i<=4;i++){
//         date++
//         res.push(date)
//     }
//     res.unshift(date-1)
//     res.unshift(date-2)
// }else if(weekDay=="Thursday"){
//     for(let i=1;i<=3;i++){
//         date++
//         res.push(date)
//     }
//     res.unshift(date-1)
//     res.unshift(date-2)
//     res.unshift(date-3)
// }else if(weekDay=="Friday"){
//     for(let i=1;i<=2;i++){
//         date++
//         res.push(date)
//     }
//     res.unshift(date-1)
//     res.unshift(date-2)
//     res.unshift(date-3)
//     res.unshift(date-4)
// }else if(weekDay=="Saturday"){
//     res.push(date+1)
//     res.unshift(date-1)
//     res.unshift(date-2)
//     res.unshift(date-3)
//     res.unshift(date-4)
//     res.unshift(date-5)
// }

// 输出结果
// console.log(res);
// console.log(`今天的日期是${year}年${month}月${date}日`);

// 获取今天是星期几
const today = new Date();
let dayOfWeek = today.getDay();

// 获取今天的日期和月份
let year = today.getFullYear(); // 四位数的年份
let month = today.getMonth() + 1; // 月份是0-11表示，所以要加1
let date = today.getDate(); // 日期是1-31表示

// 计算前6天/后6天的日期
const days = [];
if (dayOfWeek === 0) { // 如果是周日
  for (let i = 0; i < 6; i++) {
    const d = new Date(year, month - 1, date - 6 + i);
    days.push(d);
  }
} else if (dayOfWeek === 3) { // 如果是周三
  for (let i = 2; i >= 0; i--) { // 计算前两天
    const d = new Date(year, month - 1, date - i);
    days.push(d);
  }
  for (let i = 1; i <= 4; i++) { // 计算后四天
    const d = new Date(year, month - 1, date + i);
    days.push(d);
  }
} else { // 如果是其他的星期几
  for (let i = 1; i <= 6; i++) {
    const d = new Date(year, month - 1, date - 6 + i);
    days.push(d);
  }
}

// 将日期格式化为字符串
const dateFormatOptions = { weekday: 'long', month: 'long', day: 'numeric' };
const dayStrs = days.map(d => d.toLocaleDateString('en-US', dateFormatOptions));

console.log(dayStrs); // 打印出前6天/后6天的日期字符串



}