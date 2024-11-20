document.getElementById('booking-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const car = document.getElementById('car').value;
    const days = parseInt(document.getElementById('days').value);
    let pricePerDay;
  
    switch (car) {
      case 'Sedan':
        pricePerDay = 50;
        break;
      case 'SUV':
        pricePerDay = 80;
        break;
      case 'Sports Car':
        pricePerDay = 120;
        break;
      case 'Coupe':
        pricePerDay = 90;
        break;
      case 'Minivan':
        pricePerDay = 60;
        break;
      case 'Truck':
        pricePerDay = 100;
        break;
      default:
        pricePerDay = 0; 
    }
  
    const totalCost = pricePerDay * days;
  
    document.getElementById('booking-result').textContent = 
      `You have booked a ${car} for ${days} days. Total cost: $${totalCost}.`;
  });
  