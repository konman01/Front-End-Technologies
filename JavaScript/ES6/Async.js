const fetchData = callback => {
    setTimeout(() => {
        callback('done');
    }, 2000);
}
setTimeout(() => {
    console.log('Timer is done'); 
    fetchData(text => {
        console.log(text);
    });

}, 2000);