document.addEventListener('click', (e) => {
	
    if(!e.target.matches('.dropdown-toggle')){
  	    const dropdownMenus = document.querySelectorAll('.dropdown-menu');

        dropdownMenus.forEach((menu) => {
            if (menu.classList.contains('show')){
                menu.classList.remove('show');
      	    }
        });
    }

});

const dropdownToggle = document.querySelectorAll('.dropdown-toggle');

dropdownToggle.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.target.nextElementSibling.classList.toggle('show')
    });
});

const dropdownItems = document.querySelectorAll('.dropdown-item');

dropdownItems.forEach((item) => {
    item.addEventListener('click', (e) => {
            let self = e.target;
            let toggle = self.parentNode.parentNode.querySelector('.dropdown-toggle');
            const toggleText = toggle.innerText;
            toggle.innerText = self.innerText;
            self.innerText = toggleText;
    });
});