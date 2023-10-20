import React, { useRef} from "react";
import './Contact.css'
import Nav from "./Nav";
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { InputTextarea } from "primereact/inputtextarea";
import emailjs from '@emailjs/browser';
import { Toast } from 'primereact/toast';
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";



const ContactForm = () => {

    const form = useRef();
    const toast = useRef(null);
   
    const sendEmail = (e) => {
      e.preventDefault(); // prevents the page from reloading when you hit “Send”
   
      emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_KEY)
        .then((result) => {
            console.log("email envoyé")
            toast.current.show({severity:'success', summary: 'Félicitations', detail:'Votre Mail a été envoyé avec succès', life: 3000});
        }, (error) => {
            toast.current.show({severity:'error', summary: 'Error', detail:'Veuillez saisir une bonne adresse mail', life: 3000});
        });
      }
  

   

  return (
    <div className="contact">
    <Nav></Nav>
    <Toast ref={toast} />
    <form className="contactForm" ref={form} onSubmit={sendEmail}>
      <div>
        <span className="p-float-label">
            <label htmlFor="name">Name:</label>
            <InputText className="input"  type="text" id="name" name="from_name" required />
        </span>
      </div>
      <div>
        <span className="p-float-label">
            <label htmlFor="email">Email:</label>
            <InputText className="input" type="email" id="email" name="from_mail" required />
        </span>
      </div>
      <div>
        <span className="p-float-label">
            <label htmlFor="message">Message:</label>
            <InputTextarea className="input" id="message" name="message" required autoResize rows={5} cols={30} />
        </span>
      </div>
      <div>
      <Button type="submit">Submit</Button>
      </div>
    </form>

    </div>
  );
};

export default ContactForm;