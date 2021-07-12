let range = document.querySelector('#range')
let range_value = document.querySelector('#range-value')
let speciaux = document.querySelector('#speciaux')
let miniscules = document.querySelector('#miniscules')
let majiscules = document.querySelector('#majiscules')
let chiffres = document.querySelector('#chiffres')
let lancher = document.querySelector('#run')
let cleaner = document.querySelector('#clear')
let password  = document.querySelector('#password')
let _options 

const update_Options = () =>{
    _options = {
        speciaux:{
            value:speciaux.checked,
            dict:'!@#$%^&*()_+{}|"?><:-=[]\'\\/.,'
        },
        miniscules:{
            value:miniscules.checked,
            dict:'qwertyuiopasdfghjklzxcvbnm'
        },
        majiscules:{
            value:majiscules.checked,
            dict:'QWERTYUIOPASDFGHJKLZXCVBNM'
        },
        chiffres:{
            value:chiffres.checked,
            dict:'1234567890'
        }
    }
}

update_Options()
const selector = [speciaux,miniscules,majiscules,chiffres]
selector.map((data)=>{
    data.addEventListener('click',(e)=>{
        update_Options()
    })
})

const log = (params) =>{
    // console.log(params)
}

const init = () =>{
    console.log(_options)
}

const changeRange_value   = (value) => {
    range_value.textContent = value
}

const getTotalLenght = () =>{
    let len = 0
    let dict = ''
    if (_options.chiffres.value===true) {
        len+=_options.chiffres.dict.length
        dict+=_options.chiffres.dict
    }
    else if (_options.majiscules.value===true) {
        len+=_options.majiscules.dict.length
        dict+=_options.majiscules.dict
    }
    else if (_options.miniscules.value===true) {
        len+=_options.miniscules.dict.length
        dict+=_options.miniscules.dict
    }
    else if (_options.speciaux.value===true) {
        len+=_options.speciaux.dict.length
        dict+=_options.speciaux.dict
    }
    log({len,dict})
    return {len,dict}

}

const generateRandom = (dict) =>{
    const len  = parseInt(range_value.textContent)
    log(len)
    let pass = ''
    for (let index = 0; index < len; index++) {
        const id = Math.round(Math.random()*(dict.length))
        let element = dict[id]
        if (element=='undefined') {
            element = dict[0]
        }
        pass+=element  
    }
    return pass
}

const passwordEngige = () =>{
    update_Options()
    const {len,dict} = getTotalLenght()
    log(getTotalLenght())
    let pass = generateRandom(dict)
    changePassword(pass)
}

const changePassword = (value) =>{
    log(value)
    password.textContent = value
}

range.addEventListener('click',(e)=>{
    console.log(e.target.value)
    changeRange_value(e.target.value)
})

lancher.addEventListener('click',(e)=>{
    passwordEngige()
})

init()