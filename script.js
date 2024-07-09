function calculateLove() {
  let name1 = document.getElementById("name1").value.trim();
  name1 = name1.toUpperCase();
  let name2 = document.getElementById("name2").value.trim();
  name2 = name2.toUpperCase();


  if (name1 === "" || name2 === "") {
    alert("Please enter both names.");
  }
  else{
     const loverPercentage = Math.floor(Math.random() * 101);

  const result = document.getElementById("result");
  result.innerHTML =`${ name1 } and ${name2} 's Love Percentage: ${loverPercentage}%`;
  if (loverPercentage < 30) {
    result.innerHTML += "<br> Not a Great Match. Keep looking!";
  }
  else if (loverPercentage >= 30 && loverPercentage < 70) {
    result.innerHTML += "<br> There is potential. Take time !";
  }
  else {
    result.innerHTML += "<br> Great Match! You both are in love!";
  }
  }
 
}
