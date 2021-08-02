/*
 * @Author: Sky
 * @Date: 2021-07-31 16:06:26
 * @Description: interval
 */

import { interval } from "rxjs";
import {take} from 'rxjs/operators'

const numbers=interval(1000)

const takeFourNumbers=numbers.pipe(take(4))

takeFourNumbers.subscribe(x=>console.log('next:',x))
