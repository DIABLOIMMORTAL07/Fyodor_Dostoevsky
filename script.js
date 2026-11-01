document.addEventListener("DOMContentLoaded",()=>{
 const toggle=document.querySelector(".menu-toggle"),nav=document.querySelector(".main-nav");
 if(toggle&&nav){toggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));});nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");toggle.setAttribute("aria-expanded","false");}));}
 const form=document.getElementById("contactForm");if(!form)return;
 const el=id=>document.getElementById(id);
 const fields={name:el("visitorName"),email:el("visitorEmail"),topic:el("visitorTopic"),message:el("visitorMessage"),check:el("privacyCheck")};
 const errors={name:el("nameError"),email:el("emailError"),topic:el("topicError"),message:el("messageError"),check:el("checkError")};
 const success=el("formSuccess");
 form.addEventListener("submit",e=>{e.preventDefault();Object.values(errors).forEach(x=>x.textContent="");success.textContent="";let ok=true;
 if(fields.name.value.trim().length<2){errors.name.textContent="Please enter a name with at least 2 characters.";ok=false;}
 if(!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$/.test(fields.email.value.trim())){errors.email.textContent="Please enter a valid email address.";ok=false;}
 if(!fields.topic.value){errors.topic.textContent="Please select a topic.";ok=false;}
 if(fields.message.value.trim().length<10){errors.message.textContent="Please write at least 10 characters.";ok=false;}
 if(!fields.check.checked){errors.check.textContent="Please confirm the educational feedback note.";ok=false;}
 if(ok){success.textContent="Thank you. Your form has passed validation.";form.reset();}
 });
});