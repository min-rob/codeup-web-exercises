export function openTab(tabName) {
  var i;
  var x = document.getElementsByClassName("items");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
  console.log("pressed this");
}
