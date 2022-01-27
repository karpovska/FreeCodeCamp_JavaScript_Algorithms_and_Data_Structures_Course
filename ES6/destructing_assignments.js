const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };  
  
  const { today, tomorrow } = HIGH_TEMPERATURES;
  const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;

  const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };  
    
  const { today: { low: lowToday, high: highTodayy }} = LOCAL_FORECAST; 

  let a = 8, b = 6;
  [a, b] = [b, a];
  console.log(`a: ${a}, b: ${b}`);
  