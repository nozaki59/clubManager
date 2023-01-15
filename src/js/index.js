window.addEventListener("load", () => {
    const date = new Date();
    date.setDate(date.getDate());
    const yyyy = date.getFullYear();
    const mm = ("0"+(date.getMonth()+1)).slice(-2);
    const dd = ("0"+date.getDate()).slice(-2);
    document.getElementById("date").value=yyyy+'-'+mm+'-'+dd;
})

document.getElementById('commit').addEventListener('click', () => {
    let check1 = true;
    let check2 = true;
    let menu = document.getElementById('menu').value;
    let strength = document.getElementById('strength').value;
    let health = document.getElementsByName('health');
    let len = health.length;
    let checkValue = '';
    if (menu == '' || strength == '') {
        check1 = false;
        if (menu == '' && strength == '') {
            document.getElementById('menu').style.backgroundColor = '#ffff99';
            document.getElementById('strength').style.backgroundColor = '#ffff99';
        } else {
            if (menu == '') {
            document.getElementById('menu').style.backgroundColor = '#ffff99';
            } else {
                document.getElementById('strength').style.backgroundColor = '#ffff99';
            }
        }
    }
    for (let i=0; i<len; i++){
        if (health.item(i).checked){
            checkValue = health.item(i).value;
        }
    }
    if (checkValue == '') {
        check2 = false;
    }
    if (check1 && check2) {
        window.alert('正しく入力できています\nテスト段階なので再読み込みします');
        location.reload()
    } else {
        if (check1) {
            window.alert('体調を入力してください');
        } else {
            window.alert('未入力の箇所があります')
        }
    }
})