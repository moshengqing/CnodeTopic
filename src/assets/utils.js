//时间处理函数
export default function getDetailTime(timeForm){
    //以前时间
    let beforeSteamp = new Date(timeForm).getTime();
    //当前时间
    let nowTimeSteamp = new Date().getTime();
    //当前时间差值 
    let time = nowTimeSteamp - beforeSteamp;
    let seconde = Math.round(time/1000);
    let minute = Math.round(seconde/60);
    let hours = Math.round(minute/60);
    let day = Math.round(hours/24);
    let mouth = Math.round(day/30);
    console.log(day)
    console.log(mouth)
    if(day < 1){
        if(hours >= 24 || hours<= 0){
            day = day++
            hours = hours%24;
            if(minute>=60 || minute<=0){
                hours = hours++;
                minute = minute%60;
                if(seconde>60){
                    minute = minute++;
                    seconde = seconde%60;
                }else{
                    return `${seconde}秒前`
                }
            }else{
                return `${minute}分钟前`
            }
            
        } else{
            return `${hours}小时前`
        } 
    }
    else{
        if(day>=30){
            mouth = mouth++
            day = day%30;
        }
        else{
            return `${day}天前`;
        }
        return `${mouth}月前`;
    }
}





