import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";

export const Form = () => {
    const { t } = useTranslation("global");

    const { register, watch, clearErrors, formState: { errors }, handleSubmit } = useForm();
    const [submitDisabled, setSubmitDisabled] = useState(true);

    const form = useRef();
    const customerName = watch('name');

    const emailProjectName = process.env.REACT_APP_EMAIL_PROJECT_KEY
    const emailLayout = process.env.REACT_APP_EMAIL_LAYOUT
    const emailProjectKey = process.env.REACT_APP_EMAIL_KEY
    const captchaKey = process.env.REACT_APP_CAPTCHA_KEY


    const validateCaptcha = (value) => {
        value === undefined ? setSubmitDisabled(true) : setSubmitDisabled(false);
    }

    const validateSubmit = () => {
        return submitDisabled ? false : true;
    }

    const handleFormData = (data) => {
        if (submitDisabled) {
            return;
        }

        emailjs.sendForm(emailProjectName, emailLayout, form.current, emailProjectKey)
            .then((result) => {
                console.log(`Sending email result: ${result.text}`);
                form.current.reset();
                clearErrors();
            }, (error) => {
                console.log(`Seding email Error: ${error.text}`);
            });
    }

    return (
            <form ref={form} className='contact-section-form' onSubmit={handleSubmit(handleFormData)}>
                <input type='text'
                    ref={customerName}
                    name='name'
                    placeholder={t("contactForm.name")}
                    {...register('name', {
                        required: true,
                        minLength: 3
                    })}
                    className='contact-section-form-input' />
                {errors.name?.type && <p className='contat-form-error' >{t(`contactForm.nameError.${errors.name?.type}`)} {customerName !== '' && `${customerName}, not even 3 letters name... meh`}</p>}

                <input type='text'
                    name='comapany'
                    placeholder={t("contactForm.company")}
                    {...register('company', {
                        required: true,
                        minLength: 3
                    })}
                    className='contact-section-form-input' />
                {errors.company?.type && <p className='contat-form-error' >{t(`contactForm.companyError.${errors.company?.type}`)}</p>}

                <input type='phone'
                    name='phone'
                    placeholder={t("contactForm.phone")}
                    {...register('phone', {
                        required: true,
                        minLength: 7
                    })}
                    className='contact-section-form-input' />
                {errors.phone?.type && <p className='contat-form-error' >{t(`contactForm.phoneError.${errors.phone?.type}`)}</p>}

                <input
                    type='text'
                    name='email'
                    placeholder={t("contactForm.email")}
                    {...register('email', {
                        required: true,
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        }
                    })}
                    className='contact-section-form-input' />
                {errors.email?.type && <p className='contat-form-error' >{t(`contactForm.emailError.${errors.email?.type}`)}</p>}

                <input
                    type='textarea'
                    name='contactText'
                    wrap="soft"
                    placeholder={t("contactForm.message")}
                    {...register('contactText', {
                        required: true,
                        minLength: 20
                    })}
                    className='contact-section-form-text-area' />
                {errors.contactText?.type && <p className='contat-form-error' >{t(`contactForm.messageError.${errors.contactText?.type}`)}</p>}
                <div className='contact-section-form-submit'>
                    <ReCAPTCHA
                        sitekey={captchaKey}
                        className='contact-section-form-captcha'
                        onChange={validateCaptcha}
                        onErrored={validateCaptcha}
                        onExpired={validateCaptcha}
                    />

                    <input
                        type='submit'
                        name='sendButton'
                        value="Send"
                        disabled={submitDisabled}
                        className='contact-section-form-input contact-form-button'
                        {...register('sendButton', {
                            validate: validateSubmit
                        })}
                    />
                    {errors.sendButton?.type && <p className='contat-form-error' >{t(`contactForm.sendError.${errors.sendButton?.type}`)}</p>}
                </div>
            </form>
    )
}
