const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done');
        }, 2000);
    });
    return promise;
}

setTimeout(() => {
    fetchData().then((text) => {
        console.log(text);
        return fetchData();
    }).then((text) => {
        console.log(text);
    })
}, 2000);

