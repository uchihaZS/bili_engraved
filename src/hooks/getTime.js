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
    const weekDay = weekDays[day];

    console.log(`Today is ${year}-${month}-${date}, ${weekDay}, ${hour}:${minute}:${second}`); 
    var curTime = { year, month, date, weekDay, hour, minute, second }
    return curTime
}

