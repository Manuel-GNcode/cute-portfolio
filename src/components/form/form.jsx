import './form.css';
import { useState } from 'react';

export const Form = () => {
    const [isSend, setIsSend] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);

        formData.append("access_key", "ec67ed72-11e8-4900-99d5-07be14ebc439");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        setIsLoading(true);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            }).then((res) => res.json());
    
            if (res.success) {
                setIsSend(true);
                form.reset();
            } else {
                alert('Something was wrong, try again.')
            }
        } catch (error) {
            console.error('Error', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="cuteContact-message">
            <span className="cuteContact-flower"></span>
            <span className="cuteContact-light"></span>
            <h1 className='cuteContact-title'>Contact</h1>

            <form onSubmit={handleSubmit} className='cuteContact-form'>
                {isSend && <span className="form-send">
                    <p>Thank you for contacting me, I will respond to you as soon as possible!</p>
                </span>}
                <div className="cuteContact-form-subject">
                    <p>Subject:</p>
                    <label className='cuteContact-radio'>
                        <p>Greetings</p>
                        <input defaultChecked required name='subject' value='Greetings' type="radio" />
                        <span className='subject-greetings'></span>
                    </label>
                    <label className='cuteContact-radio'>
                        <p>Comission</p>
                        <input required name='subject' value='Comission' type="radio" />
                        <span className='subject-comission'></span>
                    </label>
                </div>

                <label className='cuteContact-input'><p>E-mail:</p> <input required name='email' type="email" /></label>
                <label className='cuteContact-input'><p>Name:</p><input required name='name' type="text" /></label>
                <label className='cuteContact-textarea'><p>Message</p> <textarea required name="message"></textarea></label>
                <button className='cuteContact-submit' type='submit'>{isLoading?'Loading':'Send'}</button>
            </form>
        </div>
    )
}