function Greeting({ time }) {
    if (
      time === 5  ||
      time === 6  ||
      time === 7  ||
      time === 8  ||
      time === 9  ||
      time === 10 ||
      time === 11
    ) {
      return <h1>Good Morning</h1>;
    } else if (
      time === 12 ||
      time === 13 ||
      time === 14 ||
      time === 15 ||
      time === 16 ||
      time === 17
    ) {
      return <h1>Good Afternoon</h1>;
    } else if (
      time === 18 ||
      time === 19 || 
      time === 20
  ) {
      return <h1>Good Evening</h1>;
    } else if (
      time === 21 ||
      time === 22 ||
      time === 23 ||
      time === 24 ||
      time === 1  ||
      time === 2  ||
      time === 3  ||
      time === 4
    ) {
      return <h1>Good Night</h1>;
    }
  }
  
  export default Greeting;