export interface User {
  firstName: string,
  lastName: string,
  //? optional
  email?: string,
  image?:string,
  isActive?:boolean,
  balance?:number,
  registered?:any,
  hide?:boolean
}