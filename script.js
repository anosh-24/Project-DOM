document.getElementById('menu-toggle').addEventListener('click', () => {
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
});

document.getElementById('booking-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const car = document.getElementById('car').value;
  const days = parseInt(document.getElementById('days').value);
  const priceMap = {
    'Sedan': 50,
    'SUV': 80,
    'Sports Car': 120,
    'Coupe': 90,
    'Minivan': 60,
    'Truck': 100,
  };

  const totalCost = priceMap[car] * days;

  document.getElementById('booking-result').textContent = 
    `Thank You! You booked a ${car} for ${days} days. Total cost: $${totalCost}.`;
});
