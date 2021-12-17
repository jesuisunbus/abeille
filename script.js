document.querySelector('.ui-standard').onscroll = function(){
        document.querySelector('.ui-standard-shadow').style.boxShadow = `0 -4px calc(${document.getElementById('ui-standard').scrollTop}px / 30) 4px rgba(0, 0, 0, .5)`;
        console.log(document.getElementById('ui-standard').scrollTop);
        if (document.getElementById('ui-standard').scrollTop >= 424){
                document.querySelector('.ui-standard-shadow').style.boxShadow = `rgba(0, 0, 0, 0.5) 0px -4px calc(14.1333px) 4px`;
        }
}

let burgerMenuOpened = false;
document.querySelector('.toggle-burger-menu').onclick = function(){
        toggleBurgerMenu();
}

function toggleBurgerMenu(){
        if (burgerMenuOpened === false){
                document.querySelector('.burger-menu').style.transform = 'translateX(0px)';
                document.querySelector('.burger-menu').style.transition = '.5s ease-in-out';
                document.querySelector('.burger-menu-animation').style.transition = '.5s ease-out';
                document.querySelector('.burger-menu-animation').style.transform = 'translateX(0px)';
                document.querySelector('.burger-menu-mask').style.display = 'block';
                setTimeout('opacityBurgerMenuMask()', 500);
                // document.querySelector('.ui-standard').style.transform = 'translateX(-300px)';
                burgerMenuOpened = true;
        } else {
                document.querySelector('.burger-menu').style.transform = 'translateX(300px)';
                document.querySelector('.burger-menu').style.transition = '.5s ease-out';
                document.querySelector('.burger-menu-animation').style.transition = '.5s ease-in';
                document.querySelector('.burger-menu-animation').style.transform = 'translateX(300px)';
                setTimeout('dnoneBurgerMenuMask()', 500);
                document.querySelector('.burger-menu-mask').style.opacity = '0';
                // document.querySelector('.ui-standard').style.transform = 'translateX(0px)';
                burgerMenuOpened = false;
        }
}

document.querySelector('.burger-menu-mask').onclick = function(){
        burgerMenuOpened = true;
        toggleBurgerMenu();
        overtopMenuOpened = true;
        toggleOvertopMenu();
}

function opacityBurgerMenuMask(){
        document.querySelector('.burger-menu-mask').style.opacity = '1';
}

function dnoneBurgerMenuMask(){
        document.querySelector('.burger-menu-mask').style.display = 'none';
}

let overtopMenuOpened = false;

document.querySelector('.dropdown-products').onclick = function(){
        toggleOvertopMenu();
}

function toggleOvertopMenu(){
        if (burgerMenuOpened === false){
                if (overtopMenuOpened === false){
                        document.querySelector('.overtop-menu').style.transform = 'translateY(0px)';
                        document.querySelector('.navbar').style.transform = 'translateY(' + document.querySelector('.overtop-menu').offsetHeight + 'px)';
                        document.querySelector('.dropdown-products').style.transform = 'rotate(180deg)';
                        document.querySelector('.burger-menu-mask').style.display = 'block';
                        setTimeout('opacityBurgerMenuMask()', 500);
                        document.querySelector('.toggle-burger-menu').style.display = 'none';
                        overtopMenuOpened = true;
                } else {
                        document.querySelector('.overtop-menu').style.transform = 'translateY(-100%)';
                        document.querySelector('.navbar').style.transform = 'translateY(0px)';
                        document.querySelector('.dropdown-products').style.transform = 'rotate(0deg)';
                        setTimeout('dnoneBurgerMenuMask()', 500);
                        document.querySelector('.burger-menu-mask').style.opacity = '0';
                        document.querySelector('.toggle-burger-menu').style.display = 'flex';
                        overtopMenuOpened = false;
                }       
        }
}