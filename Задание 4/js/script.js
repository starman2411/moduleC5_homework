const btn = document.querySelector('button');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const responseBlock = document.querySelector('div');

function useRequest(number1, number2, callback) {
	return fetch(`https://picsum.photos/${number1}/${number2}`)
	.then((response) => {
		return response
	})
	.then((data) => {
		callback(data.url);
	})
	.catch(() => {
		console.log('error');
	})
}

function displayResult(url) {
		responseBlock.innerHTML = `<img src="${url}">`;
};

btn.addEventListener('click', () => {
	number1 = input1.value;
	number2 = input2.value;
	if (((number1 >= 100) && (number1 <= 300)) && ((number2 >= 100) && (number2 <= 300))){
		useRequest(number1, number2, displayResult)
	} else{
		responseBlock.innerHTML = "одно из чисел вне диапазона от 100 до 300"
	}
});