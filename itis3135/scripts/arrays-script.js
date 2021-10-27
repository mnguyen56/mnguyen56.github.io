var person = ["Feng Min", "Meg Thomas", "Leon Kennedy", "Bill Overbeck", "Yui Kimura", "Claudette Morel", "Nancy Wheeler"];
var salaries = [0,0,0,0,0,0,0];


function addSalary() 
{
    var employee = document.getElementById("employee-menu").value;
    var salary = document.getElementById("salary").value;
    
    if(isNaN(salary))
    {
        alert("Salary must be a number, please try again.");
    }
    else
    {
        for(var i = 0; i < person.length; i++)
        {
            if(person[i] == employee)
            {
                salaries[i] = salary;
            }
        }
    }
}

function displayResults() 
{
    var total = 0;
    var high = salaries[0];

    for(var i = 0; i < salaries.length; i++)
    {
        total = total + parseInt(salaries[i]);
    }

    for(var j = 1; j < salaries.length; j++)
    {
        if(high < salaries[j]){
            high = salaries[j];
        }
    }

    var header = document.createElement("h2");
    var average = document.createElement("p");
    var highest = document.createElement("p");

    var element = document.getElementById("results");
    element.appendChild(header);
    element.appendChild(average);
    element.appendChild(highest);

    element.firstChild.innerHTML = "Results";
    element.firstChild.nextElementSibling.innerHTML = "Average Salary: $" + (total / salaries.length).toFixed(2);
    element.firstChild.nextElementSibling.nextElementSibling.innerHTML = "Highest Salary: $" + high;
}

function displaySalary() 
{
    document.getElementById("results_table").innerHTML = "";

    var table = document.getElementById("results_table");
    var titleRow = table.insertRow(0);

    var title1 = titleRow.insertCell(0);
    var title2 = titleRow.insertCell(1);

    title1.innerHTML = "Employee";
    title2.innerHTML = "Salary";

    for(var i = 0; i < person.length; i++)
    {
        var row = table.insertRow(-1);
        var personCell = row.insertCell(0);
        var salaryCell = row.insertCell(1);

        personCell.innerHTML = person[i];
        salaryCell.innerHTML = "$" + salaries[i];
    }
}