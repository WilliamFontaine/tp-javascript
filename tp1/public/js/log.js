function logMessage(message){
    console.log(message);
}

function logMessageDate(message){
    let today = new Date();
    console.log(today.getDate()+'/'+today.getMonth()+'/'+today.getFullYear()+' '+today.getHours()+'h'+today.getMinutes()+'min : '+message);
}