var coll = document.querySelectorAll('.collapsible');
var i;
let tc;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', function (e) {
    var content = this.parentElement.nextElementSibling;
    console.log(this.nextElementSibling);
    console.log(e.target.textContent);
    if (content.style.height === '12rem') {
      content.style.height = '0';
      content.style.transform = 'translateX(-2%)';
      content.style.visibility = 'hidden';
      e.target.textContent = 'show';
    } else {
      content.style.height = '12rem';
      content.style.transform = 'translateX(0)';
      content.style.visibility = 'visible';
      e.target.textContent = 'close';
    }
  });
}

/* Detail di productivity */
/* var coll = document.querySelectorAll(
    ".collapsible"
);

coll.forEach((c) => {
    c.addEventListener(
        "click",
        function(e) {
            var content =
                this.parentElement
                .nextElementSibling
                .nextElementSibling
                .nextElementSibling;
            console.log(this.nextElementSibling);
            console.log(e.target.textContent);
            if (
                content.style.height === "13rem"
            ) {
                content.style.height = "0";
                content.style.transform =
                    "translateX(-2%)";
                content.style.visibility = "hidden";
                // e.target.textContent = "Detail";
                e.target.style.backgroundColor =
                    "#469";
            } else {
                content.style.height = "13rem";
                content.style.transform =
                    "translateX(0)";

                content.style.visibility =
                    "visible";
                // e.target.textContent = "Close";
                e.target.style.backgroundColor =
                    "lightgrey";
            }
        }
    );
}); */

var a_toggleBtn = document.getElementById('a-pgPerformance');

a_toggleBtn.addEventListener('click', function (e) {
  var content = this.parentElement.nextElementSibling.nextElementSibling.nextElementSibling;

  if (content.style.height === '18rem') {
    content.style.height = '0';

    content.style.visibility = 'hidden';
    e.children.style.transform = 'rotate(0deg)';
  } else {
    content.style.height = '18rem';

    content.style.visibility = 'visible';
  }
});

var b_toggleBtn = document.getElementById('b-pgPerformance');

b_toggleBtn.addEventListener('click', function (e) {
  var content = this.parentElement.nextElementSibling.nextElementSibling.nextElementSibling;

  if (content.style.height === '18rem') {
    content.style.height = '0';

    content.style.visibility = 'hidden';
    e.children.style.transform = 'rotate(0deg)';
  } else {
    content.style.height = '18rem';

    content.style.visibility = 'visible';
  }
});

var c_toggleBtn = document.getElementById('c-pgPerformance');

c_toggleBtn.addEventListener('click', function (e) {
  var content = this.parentElement.nextElementSibling.nextElementSibling.nextElementSibling;

  if (content.style.height === '18rem') {
    content.style.height = '0';

    content.style.visibility = 'hidden';
    e.children.style.transform = 'rotate(0deg)';
  } else {
    content.style.height = '18rem';

    content.style.visibility = 'visible';
  }
});

var d_toggleBtn = document.getElementById('d-pgPerformance');

d_toggleBtn.addEventListener('click', function (e) {
  var content = this.parentElement.nextElementSibling.nextElementSibling.nextElementSibling;

  if (content.style.height === '18rem') {
    content.style.height = '0';

    content.style.visibility = 'hidden';
    e.children.style.transform = 'rotate(0deg)';
  } else {
    content.style.height = '18rem';

    content.style.visibility = 'visible';
  }
});
