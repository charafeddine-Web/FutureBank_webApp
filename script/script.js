document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger'); // Selecting burger by ID
  const mobileMenu = document.querySelector('.mobile-menu'); // Selecting mobile menu by class

  // Debugging: Check if the elements are correctly selected
  console.log("Burger element:", burger);
  console.log("Mobile menu element:", mobileMenu);

  // Check if the elements exist
  if (burger && mobileMenu) {
      burger.addEventListener('click', () => {
          console.log("Burger icon clicked");
          mobileMenu.classList.toggle('active'); // Toggle active class on the mobile menu
          burger.classList.toggle('active'); // Toggle active class on the burger
      });
  } else {
      console.error("Burger or mobile menu not found in the DOM");
  }
});
// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }
document.getElementById('calculateButton').addEventListener('click', function() {
  // Get user inputs
  const amount = parseFloat(document.getElementById('amount').value);
  const duration = parseFloat(document.getElementById('duration').value);
  const interestRate = parseFloat(document.getElementById('interest').value) / 100; // convert to decimal
  const insuranceRate = parseFloat(document.getElementById('insurance').value) / 100; // convert to decimal

  // Debugging: Log the inputs to the console
  console.log('Amount:', amount);
  console.log('Duration:', duration);
  console.log('Interest Rate:', interestRate);
  console.log('Insurance Rate:', insuranceRate);

  // Calculate monthly interest and number of payments
  const monthlyInterest = interestRate / 12;
  const numberOfPayments = duration * 12;

  // Calculate monthly payment using formula for an amortizing loan
  const monthlyPayment = (amount * monthlyInterest) / (1 - Math.pow(1 + monthlyInterest, -numberOfPayments));
  
  // Calculate total cost of credit and insurance
  const totalCostOfCredit = (monthlyPayment * numberOfPayments) + (amount * insuranceRate);
  
  // Update the display values
  document.getElementById('monthlyPayment').innerText = isNaN(monthlyPayment) ? '0$' : monthlyPayment.toFixed(2) + '$';
  document.getElementById('loanAmountDisplay').innerText = amount.toFixed(2) + '$';
  document.getElementById('monthlyPaymentDisplay').innerText = isNaN(monthlyPayment) ? '0$/Month' : monthlyPayment.toFixed(2) + '/Month';
  document.getElementById('totalCostDisplay').innerText = isNaN(totalCostOfCredit) ? '0$' : totalCostOfCredit.toFixed(2) + '$';
  document.getElementById('insuranceDisplay').innerText = isNaN(amount * insuranceRate) ? '0$' : (amount * insuranceRate).toFixed(2) + '$';
});