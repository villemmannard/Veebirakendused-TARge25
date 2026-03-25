type Role = "admin" | "user" | "moderator"

//Selliselt saan osa selle andmeid kasutada
type V = Extract<Role, "admin" | "moderator">

type OtherRole = "testing" |"admin" | "user" | "security"

//niimodi saab kaks type omavahel kokku panna
type X = Extract<Role, OtherRole>