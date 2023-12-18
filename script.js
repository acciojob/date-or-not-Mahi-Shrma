var isDate = function (input) {
  //   write your code here
	if(input instanceof Date){
		return true;
	}
	if(typeof input === "string"){
		let date =new Date(input);
		if(!isNaN(date.getTime())){
			return true;
		}
	}
	return false;
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
