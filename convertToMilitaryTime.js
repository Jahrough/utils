// convert civilian time to military time
var convertToMilitaryTime = function (str) {
	var militaryTime = [];
	var standardTime = str.trim();
	var standardTimeLength = standardTime.length;
	var standardTimeIndexEnd = standardTimeLength - 2;

	standardTime = `${standardTime.substring(0, standardTimeIndexEnd)} ${standardTime.substring(standardTimeLength, standardTimeIndexEnd)}`;
	standardTime = new Date(`2000 ${standardTime}`);
	militaryTime.push(standardTime.getHours(), standardTime.getMinutes(), standardTime.getSeconds());
	
	militaryTime.forEach(function(element) {
		element = element.toString();
		if (element.length < 2) {
			element = '0' + element;
		}
	});
	
	return militaryTime.join(':');
}
