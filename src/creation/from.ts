/*
 * @Author: Sky
 * @Date: 2021-07-30 16:46:10
 * @Description: from
 */

import {from} from 'rxjs'
import {take} from  'rxjs/operators'

// 输出10,20,30
// const array=[10,20,30]
// const result=from(array)

// result.subscribe(x=>console.log(x))


// 输出3,6,12,24,48,96
function *generatorDoubles(seed) {
    let i=seed
    while (true) {
        yield i
        i=2*i
    }
}

const iterator=generatorDoubles(3)
const result=from(iterator).pipe(take(10))

result.subscribe(x=>console.log(x))