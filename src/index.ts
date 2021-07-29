/*
 * @Author: Sky
 * @Date: 2021-07-29 15:55:01
 * @Description: 
 */

import { of } from 'rxjs';
 
of(10, 20, 30)
.subscribe(
  next => console.log('next:', next),
  err => console.log('error:', err),
  () => console.log('the end'),
); 

