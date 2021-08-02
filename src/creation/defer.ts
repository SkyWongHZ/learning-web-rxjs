/*
 * @Author: Sky
 * @Date: 2021-07-30 16:27:10
 * @Description: defer
 */

import {defer,fromEvent,interval} from 'rxjs'

const clickOrInterval=defer(()=>{
    return  Math.random()>.5?fromEvent(document,'click'):interval(1000)
})
clickOrInterval.subscribe(x=>console.log(x))