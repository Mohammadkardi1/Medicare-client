
const  numberWithOneDecimal = (num) => {
    const integerPart = Math.trunc(num);
    const fractionalPart = (num - integerPart).toFixed(1).substring(1); // .substring(1) removes the leading "0"
    return `${integerPart}${fractionalPart}`
}

export default numberWithOneDecimal