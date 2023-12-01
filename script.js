function openTab(event, tabName) {
    var i, tabContent, tablinks;

    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
}
// function Troca (){
//     document.getElementById("nav").innerHTML = (`<a class="ifpi" href="https://www.ifpi.edu.br/parnaiba"><img src="img/ifpi.png" width="115px" align="center"></a>
//     <span class="links">
//         <a class="nav-link" href="index.html">Home</a>
//         <a class="nav-link" href="#">Educação Física e Saúde</a>
//         <a class="nav-link" href="sobre-nos.html">About Us</a>
//     </span>
//     <span class="links-2">
//         <a class="nav-link" href="" ><img src="img/united-states-of-america.png" width="30px" alt="" align="center">&nbsp;PT</a>
//         <a class="nav-login" href="login.html" on><img src="img/login.png" alt="" width="1.8%" align="center">&nbsp;Login</a>
//     </span>`);
// }