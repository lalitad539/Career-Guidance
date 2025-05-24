
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


      function filterCollege() {
        var collegeName = document.getElementById("filter").value;
        var course = document.getElementById("course").value;
        document.querySelectorAll('[data-name][data-course]').forEach(college => {
          if((college.dataset.name.includes(collegeName) || collegeName == "") 
          && (college.dataset.course.includes(course) || course == "all")) {
            college.style.display = "block";
          } else {
            college.style.display = "none";
          }
        });
      }

       var location = document.getElementById("location").value;
        document.querySelectorAll('[data-location]').forEach(college => {
    if((college.dataset.location.includes(location) || location == "all")) {
      college.style.display = "block";
    } else {
      college.style.display = "none";
    }
  });

