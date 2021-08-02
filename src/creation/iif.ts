/*
 * @Author: Sky
 * @Date: 2021-08-02 20:46:14
 * @Description: iif
 */

import { iif,of } from "rxjs";
// let subscribeToFirst

// const firstOrSecond=iif(
//     ()=>subscribeToFirst,
//     of('first'),
//     of('second'),
// )

// subscribeToFirst=true
// firstOrSecond.subscribe(val=>console.log(val))

// subscribeToFirst=false
// firstOrSecond.subscribe(value=>console.log(value))


/* 控制一个可见的权限 */
let accessGranted
const observableIfYouHaveAccess=iif(
    ()=>accessGranted,
    of(`It seems you have an access`),
)

accessGranted=true
observableIfYouHaveAccess.subscribe(
    value=>console.log(value),
    err=>{},
    ()=>console.log('The end'),
)

accessGranted=false
observableIfYouHaveAccess.subscribe(
    value=>console.log(value),
    err=>{},
    ()=>console.log('The end'),
)