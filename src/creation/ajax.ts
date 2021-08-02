/*
 * @Author: Sky
 * @Date: 2021-07-29 15:55:01
 * @Description: ajax
 */

import {ajax} from  'rxjs/ajax'
import { map,catchError } from 'rxjs/operators'
import {of} from 'rxjs'

// const obs$=ajax(`https://api.github.com/users?per_page=5`).pipe(
//   map(userResponse=>console.log('user',userResponse)),
//   catchError(error=>{
//     console.log('error:',error);
//     return  of(error)
    
//   })
// )

// getJSON()
// const obs$=ajax.getJSON(`https://api.github.com/users?per_page=5`).pipe(
//   map(userResponse=>console.log('user',userResponse)),
//   catchError(error=>{
//     console.log('error:',error);
//     return  of(error)
    
//   })
// )


// ajax做对象处理
// const user=ajax({
//   url:'https://httpbin.org/delay/2',
//   headers:{
//     'Content-Type':'application/json',
//     'rxjs-custom-header':'Rxjs'
//   },
//   body:{
//     rxjs:'Hello World'
//   }
// }).pipe(
//   map(response=>console.log('response',response)),
//   catchError(error=>{
//     console.log('error:',error)
//     return of(error)
//   })
// )
// console.log(user);

// 使用ajax()
const obs$=ajax(`https://api.github.com/404`).pipe(
  map(userResponse=>console.log('user:',userResponse)),
  catchError(error=>{
    console.log('error:',error);
    return of(error)
    
  })
)
