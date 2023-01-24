// export interface Student{
//     name:string;
//     age:number;
//     level:number;
// }
export interface Student{
    ID: number,
    Name: string,
    Mobile: string,
    Email: string,
    NationalID: string,
    Age: number
}
export interface AddtionStudent{
    LastName: string,
    FirstName: string,
    Mobile: string,
    Email: string,
    NationalID: string,
    Age: number
}



export interface ApiResult<T>{
    Data:T;
    Message: string,
    Success: boolean,
    IsAuthorized: boolean
}
