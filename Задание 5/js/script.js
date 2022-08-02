const btn = document.querySelector('button');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const responseBlock = document.getElementById('response-block');

function useRequest(number1, number2, callback) {
	return fetch(`https://picsum.photos/v2/list?page=${number1}&limit=${number2}`)
	.then((response) => {
		return response.json()
	})
	.then((data) => {
		updateLocalStorage(data);
		callback(data);
	})
	.catch(() => {
		console.log('error');
	})
}

function updateLocalStorage(data) {
	localStorage.clear()
	localStorage.setItem('last_session', JSON.stringify(data))
}

function displayResult(data) {

	imageDivs = ''
	data.forEach(element => {
		const imageDiv = `
		<div class="card">
			<img src="${element.download_url}" class="card_image">
			<p>${element.author}</p>
		</div>
		`;
		imageDivs += imageDiv
	});
	responseBlock.innerHTML = imageDivs;
}

btn.addEventListener('click', () => {
	number1 = input1.value;
	number2 = input2.value;
	if (((number1 >= 1) && (number1 <= 10)) && ((number2 >= 1) && (number2 <= 10))){
		useRequest(number1, number2, displayResult);
	} else if (((number1 >= 1) && (number1 <= 10))){
		responseBlock.innerHTML = "Лимит вне диапазона от 1 до 10";
	} else if (((number2 >= 1) && (number2 <= 10))){
		responseBlock.innerHTML = "Номер страницы вне диапазона от 1 до 10";
	} else{
		responseBlock.innerHTML = "Номер страницы и лимит вне диапазона от 1 до 10";
	}
});

if (localStorage.getItem('last_session')) {
	displayResult(JSON.parse(localStorage.getItem('last_session')));
}