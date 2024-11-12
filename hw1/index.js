// 1.
const name = prompt("Введите ваше имя:");
alert(`Привет, ${name}!`);

// 2. 
const birthYear = prompt("Введите год вашего рождения:");
const currentYear = 2024;
const age = currentYear - birthYear;
alert(`Вам ${age} лет.`);

// 3. 
const sideLength = prompt("Введите длину стороны квадрата:");
const perimeter = sideLength * 4;
alert(`Периметр квадрата: ${perimeter}`);

// 4. 
const radius =prompt("Введите радиус окружности:");
const area = Math.PI * radius * radius;
alert(`Площадь окружности: ${area.toFixed(2)}`);

// 5. 
const distance = prompt("Введите расстояние между городами в км:");
const travelTime = prompt("За сколько часов хотите добраться?");
const speed = distance / travelTime;
alert(`Вам нужно двигаться со скоростью ${speed.toFixed(2)} км/ч.`);

// 6. 
const usdAmount = prompt("Введите сумму в долларах:");
const exchangeRate = 0.95;  
const euroAmount = usdAmount * exchangeRate;
alert(`Сумма в евро: ${euroAmount.toFixed(2)}`);

// 7. 
const flashDriveSizeGb = prompt("Введите объем флешки в Гб:");
const flashDriveSizeMb = flashDriveSizeGb * 1024;
const fileSize = 820;
const fileCount = Math.floor(flashDriveSizeMb / fileSize);
alert('${fileCount}');

// 9. 
const threeDigitNumber = prompt("Введите трехзначное число:");
const reversedNumber = 
  (threeDigitNumber % 10) * 100 + 
  (Math.floor(threeDigitNumber / 10) % 10) * 10 + 
  Math.floor(threeDigitNumber / 100);
alert(`${reversedNumber}`);