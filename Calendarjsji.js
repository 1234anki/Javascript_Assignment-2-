<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Simple JavaScript Calendar</title>
  <style>
    table {
      border-collapse: collapse;
    }
    th, td {
      border: 1px solid black;
      padding: 10px;
      text-align: center;
    }
  </style>
</head>
<body>

<h2 id="monthYear"></h2>

<table id="calendar">
  <thead>
    <tr>
      <th>Sun</th>
      <th>Mon</th>
      <th>Tue</th>
      <th>Wed</th>
      <th>Thu</th>
      <th>Fri</th>
      <th>Sat</th>
    </tr>
  </thead>
  <tbody id="calendar-body"></tbody>
</table>

<script>
  function generateCalendar() {
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth();
    
    let monthYearText = document.getElementById("monthYear");
    monthYearText.innerText = `${getMonthName(month)} ${year}`;
    
    let firstDayOfMonth = new Date(year, month, 1);
    let startingDay = firstDayOfMonth.getDay();
    
    let tableBody = document.getElementById("calendar-body");
    tableBody.innerHTML = "";
    
    let date = 1;
    for (let i = 0; i < 6; i++) {
      let row = document.createElement("tr");
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < startingDay) {
          let cell = document.createElement("td");
          let cellText = document.createTextNode("");
          cell.appendChild(cellText);
          row.appendChild(cell);
        } else if (date > daysInMonth(month, year)) {
          break;
        } else {
          let cell = document.createElement("td");
          let cellText = document.createTextNode(date);
          cell.appendChild(cellText);
          row.appendChild(cell);
          date++;
        }
      }
      tableBody.appendChild(row);
    }
  }
  
  function getMonthName(month) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[month];
  }
  
  function daysInMonth(month, year) {
    return 32 - new Date(year, month, 32).getDate();
  }
  
  window.onload = generateCalendar;
</script>

</body>
</html>
