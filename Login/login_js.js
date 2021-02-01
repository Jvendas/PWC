'use strict'
$(document).ready(function() {
    $('#login').show();
    $('#registo').hide();
});
$('#registar').click(function(){
    $('#registo').show();
    $('#login').hide();
});
function fazer_login(){
    var email= $('#email').val();
    var pass=$('#pass').val();
    localStorage.setItem("email", email);
    localStorage.setItem("pass", pass);
    window.location.href='index.html';
}