type RequiredUser = {
    id: string
    name: string
    age: number
    address: {
        street: string
        city: string
    }
}

//antud juhul on string key ja RequiredUser on väärtus e nagu tuple e dictionary
type A = Record<string, RequiredUser>

//saab kasutada ka union type
type C = Record<"admin" | "user", {test: string}>

const a:C = {
    admin: {test:"asd"},
    user: {test:"asd"}
}

//võib kasutada selist varianti
//PropertyKey tähendab, et kasutab väärtust,
// mida tahad selle type sisse panna
type B = record<PropertyKey, {test:string}>
