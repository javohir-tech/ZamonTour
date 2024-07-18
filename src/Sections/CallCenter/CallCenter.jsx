import React, { useState } from 'react'
import './CallCenter.css'
import { Form } from 'react-bootstrap'
import Button from '../../Components/Button/Button'
import { use } from 'i18next'
import { useTranslation } from 'react-i18next'
import Modal from 'react-bootstrap/Modal';
import { SendFill, TelephoneForward, TelephoneForwardFill } from 'react-bootstrap-icons'

export default function CallCenter() {
    const persons = [
        {
            personNumber: 'ex. 3 or 4 or 5'
        },
        {
            personNumber: '1'
        },
        {
            personNumber: '2'
        },
        {
            personNumber: '3'
        },
        {
            personNumber: '4+'
        },
    ]

    const countries = [
        {
            countriy: 'Antalya'
        },
        {
            countriy: 'Istanbul'
        },
        {
            countriy: 'Dubai'
        },
        {
            countriy: 'Sharm EL-SHeikh'
        },
        {
            countriy: 'Kuala Lumpur'
        },
        {
            countriy: 'Kanada'
        },
        {
            countriy: 'Angilya'
        },
        {
            countriy: 'AQSH'
        },
    ]

    const visa = [
        {
            visaItem: 'Country'
        },
        {
            visaItem: 'China'
        },
        {
            visaItem: 'England'
        },
        {
            visaItem: 'Japan'
        },
        {
            visaItem: 'Oman'
        },
        {
            visaItem: 'Usa'
        },
        {
            visaItem: 'Saudi Arabia'
        },
        {
            visaItem: 'Europa'
        },
        {
            visaItem: 'India'
        },
    ]
    //modal js
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [peoples, setPeoples] = useState('');
    const [day, setDay] = useState('');
    const [adress2, setAdress2] = useState('');
    const [adress3, setAdress3] = useState('');

    const yangila = (e) => {
        setName("");
        setPhone("");
        setPeoples("");
        setDay("");
        setAdress2("");
        setAdress3("")
    }
    // 
    const handleSubmit = async (e) => {
        e.preventDefault(); // Formni odatiy yuborilishini oldini olish

        const botToken = '7048853168:AAH8Foee1oF88AoKAjf3Rzv658pZM9WAmMs';
        const chatId = '1896479864'; // Yoki chat ID
        const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

        const message = `
          Name: ${name}
          Phone: ${phone}
          Peoples: ${peoples}
          Day: ${day}
          Address 2: ${adress2}
          Address 3: ${adress3}
        `;

        const data = {
            chat_id: chatId,
            text: message,
        };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                handleShow()
                yangila()
            } else {
                const errorData = await response.json();
                console.error('Error sending message:', errorData);
                alert('Failed to send message.');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            alert('Error sending message.');
        }
    };

    const { t } = useTranslation()

    return (
        <div className='container reservation-form py-5'>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1723.851491087315!2d69.28536637948818!3d41.33858708751007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8cb23888afb9%3A0x31c22300affbc36a!2z0K7QvdGD0YHQsNCx0LDQtNGB0LrQuNC5INGA0LDQudC-0L0sINCi0LDRiNC60LXQvdGCLCDQotCw0YjQutC10L3RgtGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e1!3m2!1sru!2s!4v1720982698457!5m2!1sru!2s"
                    style={{ width: '100%', height: 450, border: 0 }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
                <div className='form-box'>
                    <Form onSubmit={handleSubmit}>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Malumotlar Yuborildi  <SendFill/></Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Sizga tez orada aloqaga chiqamiz <TelephoneForwardFill/></Modal.Body>
                        </Modal>
                        <div className='row g-4 justify-content-between reservation-form__under'>
                            <div className='col-12'>
                                <h1 className='text-center mt-3 d-none'><h4 className='black'>O'z</h4><h4 className='blue'>joyingizni</h4><h4 className='black'>band</h4><h4 className='blue'>qiling</h4></h1>
                            </div>
                            <div className='col-md-6 col-12 '>
                                <Form.Group className="mb-3">
                                    <Form.Label>{t('name')}</Form.Label>
                                    <Form.Control className='rounded-pill py-2' placeholder="Suvonov Javohir" value={name} onChange={(e) => setName(e.target.value)} required />
                                </Form.Group>
                            </div>
                            <div className='col-md-6 col-12 '>
                                <Form.Group className="mb-3">
                                    <Form.Label>{t('phone')}</Form.Label>
                                    <Form.Control className='rounded-pill py-2' placeholder="+998 99 004 52 24" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                                </Form.Group>
                            </div>
                            <div className='col-md-6 col-12 '>
                                <Form.Group className="mb-3">
                                    <Form.Label>{t('peoples')}</Form.Label>
                                    <Form.Select className='rounded-pill py-2' value={peoples} onChange={(e) => setPeoples(e.target.value)} required>
                                        {persons.map((item, index) => (
                                            <option value={index}>{item?.personNumber}</option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>
                            </div>
                            <div className='col-md-6 col-12 '>
                                <Form.Group className="mb-3">
                                    <Form.Label>{t('day')}</Form.Label>
                                    <Form.Control type='date' className='rounded-pill py-2' placeholder="DD.MM.YYYY" value={day} onChange={(e) => setDay(e.target.value)} required />
                                </Form.Group>
                            </div>
                            <div className='col-12 '>
                                <Form.Group className="mb-3">
                                    <Form.Label>{t('adress_2')}</Form.Label>
                                    <Form.Select className='rounded-pill py-2'
                                        value={adress2}
                                        onChange={(e) => setAdress2(e.target.value)} required>
                                        {countries.map((item, index) => (
                                            <option value={index}>{item?.countriy}</option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>
                            </div>
                            <div className='col-12 '>
                                <Form.Group className="mb-3">
                                    <Form.Label>{t('adress_3')}</Form.Label>
                                    <Form.Select className='rounded-pill py-2' value={adress3} onChange={(e) => setAdress3(e.target.value)} required>
                                        {visa.map((item, index) => (
                                            <option value={index}>{item?.visaItem}</option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>
                            </div>
                            <div className='col-12'>
                                <Button text={t('button_4')} style={'button px-3 py-2 button_1 w-100'} />
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}
