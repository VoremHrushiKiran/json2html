// Export a default function
export default function json2html(data) {
  // Start constructing the HTML table as a string
  let html = '<table data-user="hrushivorem1438@gmail.com">';
  
  // Add the table header
  html += '<thead><tr><th>Name</th><th>Age</th><th>Gender</th></tr></thead>';
  
  // Add the table body
  html += '<tbody>';
  
  // Loop through the data array and add each object as a table row
  data.forEach(item => {
    html += '<tr>';
    
    // Add each cell for 'Name', 'Age', and 'Gender'
    html += `<td>${item.Name}</td><td>${item.Age}</td>`;
    
    // Only add Gender if it exists
    if (item.Gender) {
      html += `<td>${item.Gender}</td>`;
    }

    // Close the row
    html += '</tr>';
  });

  // Close the table body and table tags
  html += '</tbody></table>';

  // Return the generated HTML string
  return html;
}
