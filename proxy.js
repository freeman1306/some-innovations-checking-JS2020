const validator = {
    get(target, prop) {
        return prop in target ? target[prop] : `Поля ${prop} в обьекте нет`
    },


    set(target, prop, value) {
        if (value.length > 2) {
            Reflect.set(target, prop, value)
        } else {
            console.log('Length must be more than 2x. Now it\'' + value.length);

        }
    }

}

const form = {
    login: 'tester',
    password: '12345'
}

const formProxy = new Proxy(form, validator)


function log(message) {
    console.log('[Log]: ', message);
    
}

const proxy = new Proxy(log, {
    apply(target, thisArg, argArray) {
        if (argArray.length ===1) {
            Reflect.apply(target, thisArg, argArray)
        } else {
            console.log('the Quantity of args doesn\'t coincide');
            
        }
    }
})

proxy('Custom message')