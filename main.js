function log(){
    let a = document.getElementById('name').value;
    let b = document.getElementById('password').value;
    if( a=='' && b !='') alert("Chưa điền tên đăng nhập");
    else if( a !='' && b =='') alert("Chưa điền mật khẩu");
    else if( a=='' && b =='') alert("Chưa điền thông tin đăng nhập");
    else if(a =='lovekimnguyen' && b=='lovehanguyen') {
        alert("Đăng nhập thành công");
        location.href = 'https://lovekimnguyen.github.io/lovehanguyen';
    }
    else if(a =='oggy' && b=='lovehanguyen') {
        alert("Đăng nhập thành công");
        location.href = 'https://lovekimnguyen.github.io/oggy';
    }
    else {
        alert('Sai tên đăng nhập hoặc mật khẩu');
    }
}
function forgot(){
    location.href = ' https://lovekimnguyen.github.io/forgot__password/';
}