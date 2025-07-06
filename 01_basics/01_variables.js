const accountId = 123214
let accountEmail = "bk@34234gmail.com"
var accountPassword = "3242342"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed

accountEmail = "fnck@gmail.com"
accountPassword = "123123"
accountCity = "Dhanbad"

console.table([accountEmail, accountPassword, accountState, accountCity])

/*
Prefer not to use var
because of issue in block scope and functional scope
*/