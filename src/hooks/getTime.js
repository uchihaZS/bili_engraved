export default function () {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const day = now.getDay();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const weekDays_ZH = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
    const weekDay = weekDays[day];
    const weekDay_ZH = weekDays_ZH[day];

    console.log(`Today is ${year}-${month}-${date}, ${weekDay},${weekDay_ZH}, ${hour}:${minute}:${second}`);
    var curTime = { year, month, date, weekDay, weekDay_ZH, hour, minute, second }
    return curTime
}

