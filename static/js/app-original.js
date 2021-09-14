// import the data from data.js
const tableData=data;

//Reference the HTML table using d3
var tbody=d3.select("tbody");

function buildTable(data)  {
    // Clear existing data first
    tbody.html("");

    //Loop through each object in the data and append row & cells for each value in row
    data.forEach((dataRow) => {
        //Append a row to the table body
        let row = tbody.append("tr");

        //Loop through each field in dataRow and add each value as a table cell (td)
        Object.values(dataRow).forEach((val)=> {
            let cell=row.append("td");
            cell.text(val);
            }
        );
    });
}

function handleClick() {
    // Filtered data
    let date= d3.select("#datetime").property("value");
    //Unfiltered data
    let filteredData=tableData;

    //Check for filter and apply
    if (date) {
        filteredData=filteredData.filter(row => row.datetime === date);
    };

    //Build filtered table
    buildTable(filteredData);
}

//Attach an event to listen for button click
d3.selectAll("#filter-btn").on("click",handleClick);

//Build the table when the page loads
buildTable(tableData);
