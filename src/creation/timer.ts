/*
 * @Author: Sky
 * @Date: 2021-08-02 20:22:27
 * @Description: timer
 */
// import { timer,of } from "rxjs";
// import { concatMapTo } from "rxjs";

// const source=of(1,2,3)

// const result=timer(3000).pipe(
//     concatMapTo(source)
// )
// .subscribe(console.log)


// 得到所有的值直到下一分钟开始
// import { interval,timer } from "rxjs";
// import  {takeUntil}  from 'rxjs/operators'

// const currentDate=new Date()
// const startOfNextMinute=new Date(
//     currentDate.getFullYear(),
//     currentDate.getMonth(),
//     currentDate.getDate(),
//     currentDate.getHours(),
//     currentDate.getMinutes()+1,
// )

// const source=interval(1000)

// const result=source.pipe(
//     takeUntil(timer(startOfNextMinute))
// )
// result.subscribe(console.log)

// 立即开始定时器
import { timer,interval } from "rxjs";
timer(0,1000).subscribe(n=>console.log('timer',n))
interval(1000).subscribe(n=>console.log('interval',n))
