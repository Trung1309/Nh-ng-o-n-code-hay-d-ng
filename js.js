
$('.slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots:true,

  arrows:false,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        dots:false
      }
    },
  ]
});
    


/*menu moble */
const hambuger = document.querySelector(".hambuger");
const navMenu = document.querySelector(".header-bottom-mobile .nav-menu");

hambuger.addEventListener("click",() => {
    hambuger.classList.toggle("active");
    navMenu.classList.toggle("active")
})
document.querySelectorAll(" .nav-link").forEach(n=>n.
addEventListener("click", () => {
    hambuger.classList.remove("active");
    navMenu.classList.remove("active");
}))


//Back top 
  var btn = $('#backtop');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });


//Scroll fixd navmenu
  let navbar = document.getElementById('header-bottom').classList
  let active_class = "navbar_scrolled"

  window.addEventListener('scroll', e => {
    if(pageYOffset > 500) navbar.add(active_class)
    else navbar.remove(active_class)
  })

/* Tự động add thêm icon down vào những nơi có menu-con trong menu chính */
  const menuItem = document.querySelectorAll('.header-bottom .nav-menu > li');

  menuItem.forEach(item => {
      const subMenu = item.querySelector('ul.sub-menu');
      if (subMenu) {
      const icon = document.createElement('i');
      icon.className = 'fa-solid fa-chevron-down'; // Replace with the class of your icon library, e.g., Font Awesome

      // Add the icon to the beginning of the <li> element
      item.appendChild(icon);
      }
  });

/* tự động add thêm icon down vào menu mobile ở những nơi có menu con */
  const menuItemMobile = document.querySelectorAll('.header-bottom-mobile .nav-menu  li');

  menuItemMobile .forEach(item => {
        const subMenu = item.querySelector('ul.sub-menu');
        if (subMenu) {
            const iconSpan = document.createElement('span');
            const icon = document.createElement('i');
            icon.className = 'fa-solid fa-chevron-down'; // Replace with the class of your icon library, e.g., Font Awesome

            iconSpan.appendChild(icon);
            // Add the icon to the beginning of the <li> element
            item.appendChild(iconSpan);
        }
  });

/* Click button xổ ra menu con */
  $('.header-bottom-mobile .nav-menu li .sub-menu').hide();
  $(".header-bottom-mobile .nav-menu li>span").click(function(){
      $(this).parent().children("ul").toggle('');
      $(this).find('.fa-chevron-down').toggleClass('icon-rotate');
  })

/* click vào icon menu sẽ chuyển hướng */

    
