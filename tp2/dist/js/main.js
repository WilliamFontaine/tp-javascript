iterate();

let h1 = document.querySelector('h1');
logMessageWithDate(h1.innerHTML);

let titleNews = document.querySelector('#titleNews');
logMessageWithDate(titleNews.innerText);

let titles = document.querySelectorAll('h3.title');
titles.forEach(element => logMessageWithDate(element.innerHTML));

let button = document.querySelector('input[name="addNewsBtn"]');
bindButton(button);

let but = document.querySelectorAll("button");
but.forEach(element => bindButtonArticle(element));

jsonToArticle(ALLNEWSJSON)