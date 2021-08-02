/*
 * @Author: Sky
 * @Date: 2021-07-31 16:15:15
 * @Description: range
 */

import {range} from  'rxjs'

const numbers=range(1,3)

numbers.subscribe({
    next:value=>{console.log(value)},
    complete:()=>{console.log('Complete')}
})