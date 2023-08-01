const form = document.querySelector("form");
// console.log(form);

//This use-case will give empty value:
// const height = parseInt(document.querySelector("#height").value);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
//   console.log(height);
  const results = document.querySelector("#results");
  if (height === "" || height <= 0 || isNaN(height)) {
    results.innerHTML = `<span> ${height} Please give a valid height </span>`
    results.style = "color: rgb(255, 0, 0)"
  } else if(weight === "" || weight <= 0 || isNaN(weight)){
    results.innerHTML = `<span> ${weight} Please give a valid weight </span>`
    results.style = "color: rgb(255, 0, 0)"
  } else{
    const bmi = (weight / ((height*height)/10000)).toFixed(2)
    if(bmi < 18.60){
        results.innerHTML = `<span> BMI = ${bmi} <br> You are under weight </span> `
    } else if(bmi >= 18.60 && bmi <= 24.90){
        results.innerHTML = `<span> BMI = ${bmi} <br> Your weight is normal </span> `
        results.style = "color: #11ed09;"
    } else{
        results.innerHTML = `<span> BMI = ${bmi} <br> You are over weight </span> `
    }
  }
});
