const xmlString = `
<list>
    <student>
        <name lang="en">
            <first>Ivan</first>
            <second>Ivanov</second>
        </name>
        <age>35</age>
        <prof>teacher</prof>
    </student>
    <student>
        <name lang="ru">
            <first>Петр</first>
            <second>Петров</second>
        </name>
        <age>58</age>
        <prof>driver</prof>
    </student>
</list>
`;

const parser = new DOMParser();
const xmlDOM = parser.parseFromString(xmlString, 'text/xml');

const students = xmlDOM.querySelector('list').querySelectorAll('student')
const studentName1 = students[0].querySelector('name').querySelector('first').textContent + ' ' + students[0].querySelector('name').querySelector('second').textContent
const studentLang1 = students[0].querySelector('name').getAttribute('lang')
const studentAge1 = students[0].querySelector('age').textContent
const studentProf1 = students[0].querySelector('prof').textContent
const studentName2 = students[1].querySelector('name').querySelector('first').textContent + ' ' + students[1].querySelector('name').querySelector('second').textContent
const studentLang2 = students[1].querySelector('name').getAttribute('lang')
const studentAge2 = students[1].querySelector('age').textContent
const studentProf2 = students[1].querySelector('prof').textContent

const result = {
    list: [
        {name: studentName1, age: studentAge1, prof: studentProf1, lang: studentLang1},
        {name: studentName2, age: studentAge2, prof: studentProf2, lang: studentLang2}
    ]
}

console.log(result)
