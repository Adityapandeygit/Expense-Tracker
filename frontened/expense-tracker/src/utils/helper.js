// helper.js

export const validateEmail = (email) => {
  // Basic email regex
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const getInitials =(name) => {
  if(!name) return "";

  const words = name.split(" ");
  let initials ="";

  for(let i=0;i<Math.min(words.length,2);i++){
    initials+=words[i][0];
  }

  return initials.toUpperCase();
};


export const addThousandsSeparator = (num) => {
  if(num==null || isNaN(num)) return "";
  const[integerPart, fractionalPart] = num.toString().split(".");
  const formatedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g,",");

  return fractionalPart
  ? `${formatedInteger}.${fractionalPart}`
  : formatedInteger;
}

export const prepareExpenseBarChartData = (data=[] ) => {
  const chartData = data.map ((item) => ({
    category: item?.category,
    amount:item?.amount,
  }));
  return chartData
};