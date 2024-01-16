function formData(){
    var c="red";

    var full_name = document. getElementById(`f_name`);
    // document.getElementById(`f_info`).innerHTML="hello";
    full_name.style.backgroundColor =c;
    // var f_msg=document.getElementById(`f_info`);
    // f_msg.innerHTML="hello";
    console.log(full_name.value);

    var email =document.getElementById(`email`);
    // document.getElementById(`e_info`).innerHTML="hi";
    console.log(email.value);
    var f_email=email.style;
    f_email.backgroundColor="green";
    f_email.fontSize="15px";


    var password=document.getElementById(`pass`);
    // document.getElementById(`p_info`).innerHTML="helloo";
    console.log(password.value);
    var f_pass=password.style;
    f_pass.backgroundColor="blue";
    f_pass.fontSize="30px";
    
    var btn=document.getElementById(`b_id`);
    var f_btn=btn.style;
    f_btn.transform=`scaleX(0.7)`;
    // btn.style.transform=`scaleX(0.5)`;
    f_btn.transition= `all 0.5s ease-In`;
    f_btn.transform+=`rotate(360deg)`;
    f_btn.backgroundColor=`grey`;
    f_btn.color=`white`;
}

