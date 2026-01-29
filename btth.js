let username = prompt("mời nhập tên người dùng:");
let role = prompt("mời nhập vai trò người dùng");
let account_balance = +prompt("nhập số dư tài khoản ngân hàng");
let card_status = prompt("nhập trạng thái thẻ trong thư viện:");
let date = +prompt("nhập số ngày quá hạn trả sách:")
switch (role.toLowerCase()) {
    case "admin":
        console.log("chào admin, bạn có quyền truy cập vào hệ thống");
        break;
    case "student":
        console.log("chào sinh viên, bạn có thể mượn sách");
        break;
    case "guest":
        console.log("chào khách, bạn có thể đọc tại chỗ");
        break;
    default:
        console.log("vai trò không hợp lệ");
        break;
}
let check = username!=null && (role=="admin" || role=="student") && account_balance>0
&& card_status=="true";
if(check){
    console.log("đủ điều kiện mượn sách"); 
}else{
    console.log("không đủ điều kiện");  
}
if(date==0){
    console.log("cảm ơn bạn đúng hạn");

    
}else if(date>=1&&date<=5){
    console.log(' số tiền phạt:' , date*5000);
    
}else if(date>=6&&date<=10){
    console.log(' số tiền phạt:' , date*10000);
    
}else if(date>10){
    console.log("số tiền phạt: 200.000");
    
}


