document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const msg = document.getElementById('message');
    

    const VALID_EMAIL = 'hello@icloud.co';
    const VALID_PASSWORD = '8888';
    

    function createDummyToken(userEmail) {

        const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
        const payload = btoa(JSON.stringify({ email: userEmail, iat: Date.now() })); 
        const signature = "simple-signature-123"; 
        

    }
    
  
    form.addEventListener('submit', (e) => {
        e.preventDefault(); 
        
        const mail = email.value.trim();
        const pass = password.value.trim();

        msg.className = 'login-message';
        
        if (mail === VALID_EMAIL && pass === VALID_PASSWORD) {
          
            const token = createDummyToken(mail);
            
          
            localStorage.setItem('userToken', token);
            
            msg.textContent = ' Kirish muvaffaqiyatli!';
            msg.classList.add('success');
            
           
            setTimeout(() => {
                window.location.href = './title/_home__pages.html'; 
            }, 1000);
            
               } else {
          
            msg.textContent = 'Xato: Malumotlar notogri. Token yoq.';
            msg.classList.add('error');
     
            localStorage.removeItem('userToken');
        }
    });


    const token = localStorage.getItem('userToken');
    
    if (token) {
   
        console.log("Foydalanuvchining tokenga kirishi bor: ", token);
   
    } else {
        console.log("Foydalanuvchi tizimga kirmagan.");
    }
});
