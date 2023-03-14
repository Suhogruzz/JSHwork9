const check = [...document.querySelectorAll('.interest__check')];

check[0].addEventListener('change', () => {
    if (!check[0].checked) {
       check[1].checked = false;
       check[2].checked = false;
    } else {
       check[1].checked = true;
       check[2].checked = true;
    }
 });
 
 check[3].addEventListener('change', () => {
    if (!check[3].checked) {
       check[4].checked = false;
       check[5].checked = false;
    } else {
       check[4].checked = true;
       check[5].checked = true;
    }
 })