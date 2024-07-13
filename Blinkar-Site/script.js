let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
            });
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
            
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

document.getElementById('EmailForm').addEventListener('submit',function(event){
    event.preventDefault();
    let name = document.getElementById('messangerName').value;
    let email = document.getElementById('messangerEmail').value;
    let phone = document.getElementById('messangerPhone').value;
    let subject = document.getElementById('messageSubject').value;
    let content = document.getElementById('contactMessage').value;

    let mailtoUrl = 'mailto:dmcdonald1414@gmail.com' +
                    '?subject=' + encodeURIComponent(subject) +
                    '&body=' + encodeURIComponent('Name: ' + name + '\n' +
                                                   'Email: ' + email + '\n' +
                                                   'Phone: ' + phone + '\n' +
                                                   'Message: ' + content);
                            
                            
    window.location.href=mailtoUrl;
    //messangerName
    //messangerEmail
    //messangerPhone
    //messageSubject
    //contactMessage
})