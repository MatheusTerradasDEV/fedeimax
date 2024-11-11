function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


function animateOnScroll() {
    const certificadoSection = document.querySelector('#certificado .certificado-content');
    
    if (isElementInViewport(certificadoSection)) {
        certificadoSection.querySelector('.certificado-texto').style.opacity = '1';
        certificadoSection.querySelector('.certificado-texto').style.transform = 'translateX(0)';
        certificadoSection.querySelector('.certificado-imagem').style.opacity = '1';
        certificadoSection.querySelector('.certificado-imagem').style.transform = 'translateX(0)';
    } else {
        
        certificadoSection.querySelector('.certificado-texto').style.opacity = '0';
        certificadoSection.querySelector('.certificado-texto').style.transform = 'translateX(-50px)';
        certificadoSection.querySelector('.certificado-imagem').style.opacity = '0';
        certificadoSection.querySelector('.certificado-imagem').style.transform = 'translateX(50px)';
    }
}


window.addEventListener('scroll', animateOnScroll);



function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    return (
        rect.top < windowHeight &&
        rect.bottom >= 0
    );
}


function animateOnScroll() {
    const certificadoSection = document.querySelector('#certificado .certificado-content');
    
    if (isElementInViewport(certificadoSection)) {
        certificadoSection.querySelector('.certificado-texto').style.opacity = '1';
        certificadoSection.querySelector('.certificado-texto').style.transform = 'translateX(0)';
        certificadoSection.querySelector('.certificado-imagem').style.opacity = '1';
        certificadoSection.querySelector('.certificado-imagem').style.transform = 'translateX(0)';
    } else {
        
        certificadoSection.querySelector('.certificado-texto').style.opacity = '0';
        certificadoSection.querySelector('.certificado-texto').style.transform = 'translateX(-50px)';
        certificadoSection.querySelector('.certificado-imagem').style.opacity = '0';
        certificadoSection.querySelector('.certificado-imagem').style.transform = 'translateX(50px)';
    }
}


window.addEventListener('scroll', animateOnScroll);


animateOnScroll();












const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector('span');

       
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
            answer.style.opacity = '0';
            icon.style.transform = 'rotate(0deg)'; 
        } else {
            
            document.querySelectorAll('.faq-answer').forEach(ans => {
                ans.style.maxHeight = null;
                ans.style.opacity = '0';
            });
            document.querySelectorAll('.faq-question span').forEach(ic => {
                ic.style.transform = 'rotate(0deg)';
            });

            
            answer.style.maxHeight = answer.scrollHeight + "px";
            answer.style.opacity = '1';
            icon.style.transform = 'rotate(45deg)'; 
        }
    });
});






const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        
        card.classList.toggle('flipped');
    });
});
