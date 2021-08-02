/*
 * @Author: Sky
 * @Date: 2021-08-02 19:53:20
 * @Description: throwError
 */

import {throwError,timer,of}  from 'rxjs'
import { concatMap } from 'rxjs/operators' 

// let errorCount=0

// const errorWithTimestamp$=throwError(()=>{
//     const error:any=new Error(`This is error number ${++errorCount}`)
//     error.timestamp=Date.now()
//     return error
// })

// errorWithTimestamp$.subscribe({
//     error:err=>console.log(err.timestamp,err.message)
// })

// errorWithTimestamp$.subscribe({
//     error:err=>console.log(err.timestamp,err.message)
// })


 /* unnecessary usage */
const delay$=of(1000,2000,Infinity,3000)

delay$.pipe(
    // concatMap(ms=> ms<10000?timer(ms):throwError(()=>new Error(`Invalid time${ms}`)) )
    concatMap(ms=> {
        if(ms<10000){
            return timer(ms)
        }else{
            throw new Error(`Invalid time ${ms}` )
        }
    })
)
.subscribe({
    next:console.log,
    error:console.error,
})