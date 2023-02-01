function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myMenu");
    li = ul.getElementsByTagName("li");
    for (i = 1; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[1];
      if (a.innerHTML.toUpperCase().indexOf(filter)) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
    }