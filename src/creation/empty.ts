/*
 * @Author: Sky
 * @Date: 2021-07-30 16:33:17
 * @Description: empty
 */

import {empty,interval,of} from  'rxjs'
import  {startWith,mergeMap} from 'rxjs/operators'

// const result=empty().pipe(startWith(7))
// result.subscribe(x=>console.log(x))


// 奇数时定时输出a,b,c
const interval$=interval(1000)
const result=interval$.pipe(
    mergeMap(x=>x%2===1?of('a','b','c'):empty())
)
result.subscribe(x=>console.log(x))