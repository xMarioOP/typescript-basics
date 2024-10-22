import { subDays, format, sub } from "date-fns";

const date = new Date(1998, 6, 16)
const rta = subDays(date, 30)
const str = format(rta, 'yyyy/MM/dd')

console.log(str);
