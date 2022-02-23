const showHide1 = () => {
    let readMoreDiv = document.querySelector("#more1");
    if (readMoreDiv.style.display === "block") {
      readMoreDiv.style.display = "none"
      btn1.textContent = "Read More..."
    } else {
      readMoreDiv.style.display = "block";
      btn1.textContent = "Read Less..."
    }
  }

let btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", showHide1);

const btn2 = document.getElementById("btn2");

btn2.addEventListener("click", (_) => {
    const more2 = document.getElementById("more2");
  if (more2.style.display == "block") {
    more2.style.display = "none";
    btn2.innerText = "Read More...";
  } else {
    more2.style.display = "block";
    btn2.innerText = "Read Less...";
  }
});

const getRating1 = () => {
  let userRating = parseInt(prompt("Rate this collection (from 1 to 5 stars)"));
  if (userRating > 5 || userRating < 1 || isNaN(userRating)) {
    alert("Try again with a number between 1 and 5!");
  } else {
    document.querySelector("#rating1").innerHTML = `You gave a rating of: `;
    for (let i = 1; i <= userRating; i++) {
      document.querySelector(
        "#rating1"
      ).innerHTML += `<i class='yellow star icon'></i>`;
    }
  }
};

let btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", getRating1);

const getRating2 = () => {
    let userRating = parseInt(prompt("Rate this collection (from 1 to 5 hearts)"));
    if (userRating > 5 || userRating < 1 || isNaN(userRating)) {
      alert("Try again with a number between 1 and 5!");
    } else {
      document.querySelector("#rating2").innerHTML = `You gave a rating of: `;
      for (let i = 1; i <= userRating; i++) {
        document.querySelector(
          "#rating2"
        ).innerHTML += `<i class='red heart icon'></i>`;
      }
    }
  };
  
  let btn4 = document.querySelector("#btn4");
  btn4.addEventListener("click", getRating2);
