function bindButton(button){
	button.onclick = function(event){
		event.preventDefault();
    	let title = document.querySelector('input[name="titleToAdd"]');
        let description = document.querySelector('textarea[name="descriptionToAdd"]');
		
        let article = new Article(0, title.value, description.value);
		if(article.addArticle()){
			title.value = '';
            description.value = '';
        }

		return false;
	};
}

function clearErrors(){
	let errors = document.querySelectorAll('.error');

    if(errors){
        while(errors.length > 0 && errors[0].parentNode != null){
            errors[0].parentNode.removeChild(errors[0]);
        }        
    }
}

function addError(message, parent){
	let error = document.createElement('p');
    error.innerHTML = message;
    error.style.color = ROUGE;
    error.classList.add('error');

    parent.prepend(error);
}

function viewdetailClick(){
    let p = this.parentNode.querySelector('p');

    logMessageWithDate(p.innerHTML);
}