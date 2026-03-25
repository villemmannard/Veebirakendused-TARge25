function getUser(id: string) {
    return {name: "Kyle", id }
}

//tagastab meile väärtused, mis on selle funktsiooni sees 
//kui lisab funktsiooni uue muutuja, siis näitab seda tulemus
type J = ReturnType<typeof getUser>

type L = Parameters<typeof getUser>