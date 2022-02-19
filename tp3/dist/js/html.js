function clearErrors() {
    let errors = $('.error');

    if (errors) {
        while (errors.length > 0 && errors[0].parentNode != null) {
            errors[0].parentNode.removeChild(errors[0]);
        }
    }
}

function addError(message) {
    let error = $('<p></p>').text(message).attr('class', 'error').attr('style', 'color: rgb(255, 0, 0);');
    let form =  $('#addNewsForm')
    form.prepend(error);
}

