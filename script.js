// Get the dropdown button and content
var dropdowns = document.getElementsByClassName("dropdown");

// Loop through the dropdowns and add event listeners
for (var i = 0; i < dropdowns.length; i++) {
  var dropdown = dropdowns[i].querySelector(".dropbtn");
  var content = dropdowns[i].querySelector(".dropdown-content");

  dropdown.addEventListener("click", function() {
    content.classList.toggle("show");
  });

  // Close the dropdown if the user clicks outside of it
  window.addEventListener("click", function(event) {
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var j = 0; j < dropdowns.length; j++) {
        var content = dropdowns[j];
        if (content.classList.contains("show")) {
          content.classList.remove("show");
        }
      }
    }
  });
}
// Graph
const data = {
  labels: ['Tech', 'Non-Tech', 'Workshops'],
  datasets: [{
    label: 'No. of courses',
    data: [30, 12, 6,],
    backgroundColor: [
      'rgba(255, 26, 104, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(0, 0, 0, 0.2)'
    ],
    borderColor: [
      'rgba(255, 26, 104, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)',
      'rgba(0, 0, 0, 1)'
    ],
    borderWidth: 1
  }]
};

// config 
const config = {
  type: 'bar',
  data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
};

// render init block
const myChart = new Chart(
  document.getElementById('myChart'),
  config
);

// Instantly assign Chart.js version
const chartVersion = document.getElementById('chartVersion');
chartVersion.innerText = Chart.version;
