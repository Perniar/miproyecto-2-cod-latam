const menuitems = document.querySelectorAll('.menu-item')

menuitems.forEach(function (item){
    item.addEventListener('click',function(a){
        const currenitems = document.querySelector ('.active')
        currenitems.classList.remove('active')
        a.target.classList.add('active')
    })
})

const menuHamburguesa = document.querySelector('#menu-hamburguesa')

menuHamburguesa.addEventListener('click',function(){
    document.body.classList.toggle('mobile-menu-active')
})


const ModoOscuro = document.querySelector('#modo-oscuro')


ModoOscuro.addEventListener('click',function(){
    document.body.classList.toggle('body-modo-oscuro')
})