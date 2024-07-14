import React from 'react'
import './CallCenter.css'
import { Form } from 'react-bootstrap'

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
            visaItem:'Country'
        },
        {
            visaItem:'China'
        },
        {
            visaItem:'England'
        },
        {
            visaItem:'Japan'
        },
        {
            visaItem:'Oman'
        },
        {
            visaItem:'Usa'
        },
        {
            visaItem:'Saudi Arabia'
        },
        {
            visaItem:'Europa'
        },
        {
            visaItem:'India'
        },
    ]
    return (
        <div className='container border reservation-form py-5'>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1723.851491087315!2d69.28536637948818!3d41.33858708751007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8cb23888afb9%3A0x31c22300affbc36a!2z0K7QvdGD0YHQsNCx0LDQtNGB0LrQuNC5INGA0LDQudC-0L0sINCi0LDRiNC60LXQvdGCLCDQotCw0YjQutC10L3RgtGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e1!3m2!1sru!2s!4v1720982698457!5m2!1sru!2s"
                    style={{ width: '100%', height: 450, border: 0 }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
                <div className='form-box'>
                    <Form action="">
                        <div className='row g-4 justify-content-between reservation-form__under'>
                            <div className='col-12'>
                            <h1 className='text-center mt-3'><h4 className='black'>O'z</h4><h4 className='blue'>joyingizni</h4><h4 className='black'>band</h4><h4 className='blue'>qiling</h4></h1>
                            </div>
                            <div className='col-md-6 col-12 '>
                                <Form.Group className="mb-3">
                                    <Form.Label>Ismingiz</Form.Label>
                                    <Form.Control className='rounded-pill py-2' placeholder="Suvonov Javohir" />
                                </Form.Group>
                            </div>
                            <div className='col-md-6 col-12 '>
                                <Form.Group className="mb-3">
                                    <Form.Label>Telefon raqamingiz</Form.Label>
                                    <Form.Control className='rounded-pill py-2' placeholder="+998 99 004 52 24" />
                                </Form.Group>
                            </div>
                            <div className='col-md-6 col-12 '>
                                <Form.Group className="mb-3">
                                    <Form.Label>Necha kishisiz</Form.Label>
                                    <Form.Select className='rounded-pill py-2'>
                                        {persons.map((item, index) => (
                                            <option value={index}>{item?.personNumber}</option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>
                            </div>
                            <div className='col-md-6 col-12 '>
                                <Form.Group className="mb-3">
                                    <Form.Label>Uchish Sanasi</Form.Label>
                                    <Form.Control className='rounded-pill py-2' placeholder="DD.MM.YYYY" />
                                </Form.Group>
                            </div>
                            <div className='col-12 '>
                                <Form.Group className="mb-3">
                                    <Form.Label>Manzilni tanlang</Form.Label>
                                    <Form.Select className='rounded-pill py-2'>
                                        {countries.map((item, index) => (
                                            <option value={index}>{item?.countriy}</option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>
                            </div>
                            <div className='col-12 '>
                                <Form.Group className="mb-3">
                                    <Form.Label>Manzilni tanlang</Form.Label>
                                    <Form.Select className='rounded-pill py-2'>
                                        {visa.map((item, index) => (
                                            <option value={index}>{item?.visaItem}</option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}
