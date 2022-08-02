const btn = document.querySelector('button');
const input = document.querySelector('input');
const responseBlock = document.querySelector('div');

function useRequest(number, callback) {
	const xhr = new XMLHttpRequest();

	xhr.open("get", "https://picsum.photos/v2/list?limit=" + number, true);

	xhr.onload = function() {
		if (xhr.status != 200) {
			console.log('Статус ответа: ', xhr.status);
		} else {
			const result = JSON.parse(xhr.response);
			if (callback){
				callback(result)
			}
		}
	};

	xhr.onerror = function() {
		console.log('Ошибка! Статус сервера: ', xhr.status);
	};

	xhr.send();
};

function displayResult(result) {
	imageDivs = ''
	result.forEach(element => {
		const imageDiv = `
		<div class="card">
			<img src="${element.download_url}" class="card_image">
			<p>${element.author}</p>
		</div>
		`;
		imageDivs += imageDiv
	});
	responseBlock.innerHTML = imageDivs;
};

btn.addEventListener('click', () => {
	number = input.value;
	if ((number >= 1) && (number <= 10)){
		useRequest(number, displayResult)
	} else{
		responseBlock.innerHTML = "число вне диапазона от 1 до 10"
	}
});