fuction getName(cb) {
    setTimeout(() => {
        cb('likelion');
    }, 2000);
}

function getHage(cb) {
    setTimeout(() => {
        resoleve('13');
    }, 2000);
}

function getAddress() {
    return new Promise((resoleve) => {
        setTimeout(() => {
            resoleve('Ansan');
        }, 2000);
    });
}

(async ()=> {
    const name = await getName();
    const hage = await getAge();
    const address = await getAddress();

    console.log(name, age, address);
})();