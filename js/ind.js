function sendmail(){
    var pas={
        name:document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject:document.getElementById("name").value,
        message:document.getElementById("message").value,
    };



const serviceID= "service_a96ftjb";
const templateID ="template_erc51yq";

emailjs
.send(serviceID,templateID,pas)
.then(
    (res)=>{
    document.getElementById("name").value="",
    document.getElementById("email").value="",
    document.getElementById("subject").value="",
    document.getElementById("message").value="",
    console.log(res);
    alert("your message sent successfully");
    })
    .catch((err)=>console.log(err));
    


}