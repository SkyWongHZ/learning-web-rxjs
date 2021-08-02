/*
 * @Author: Sky
 * @Date: 2021-07-31 16:11:21
 * @Description: of
 */

import {of} from  'rxjs'

// of(10,20,30)
// .subscribe(
//     next=>console.log('next:',next),
//     err=>console.log('error:',err),
//     ()=>console.log('the end')
// )

of([10,20,30])
.subscribe(
    next=>console.log('next:',next),
    err=>console.log('error:',err),
    ()=>console.log('the end')
)