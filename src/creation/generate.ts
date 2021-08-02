/*
 * @Author: Sky
 * @Date: 2021-07-31 15:50:55
 * @Description: generate
 */

import {generate}  from 'rxjs'


// 产生连续数字
// const result=generate(0,x=>x<3,x=>x+1,x=>x)
// result.subscribe(x=>console.log(x))


// use  asap  scheduler
// const result=generate(1,x=>x<5,x=>x*2,x=>x+1,asap)
// result.subscribe(x=>console.log(x))

// const result=generate(0,x=>x<3,x=>x+1,x=>x*1000)

const result=generate({
    initialState:0,
    condition(value){return value<3},
    iterate(value){return value+1},
    resultSelector(value){return value*1000}
})


result.subscribe({
    next:value=>console.log(value),
    complete:()=>console.log('Complete')
})
