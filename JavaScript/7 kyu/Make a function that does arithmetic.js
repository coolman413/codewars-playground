function arithmetic(a, b, operator){
    //your code here!
    switch(operator) {
      case "add":
        return a + b;
        break;
      case "subtract":
        return a - b;
        break;
      case "multiply":
        return a * b;
        break;
      case "divide":
        return a / b;
        break;
      default:
        return "Not a valid operator."
    }
  }
