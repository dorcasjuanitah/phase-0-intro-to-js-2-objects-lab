const employee = {
    name: "Dor",
    streetAddress: "23"
}
function updateEmployeeWithKeyAndValue(employee, key, value){
return {
    ...employee,
    "name": "Sam",
    "streetAddress": "11 Broadway"
};
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){

        employee.name = "Sam",
        employee.streetAddress = "11 Broadway"
        return employee
}

function deleteFromEmployeeByKey(employee, key){

    const newEmployee ={...employee};
    delete employee.key

}
console.log(employee)

