
interface query {
    [key:string]:any
}
export const packQuery=(obj:query)=>{
let temp = obj.map((item:any,key:string) => {
    return `${key}=${item}`
})
return temp.join('&')
}