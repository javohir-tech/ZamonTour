import React from 'react'

export default function ContactsCard({ icon, type, adress }) {
    return (
        <div>
            <div className='contacts-card text-center mb-3'>
                <div className='contacts-card-icon'>
                    <span>{icon}</span>
                </div>
                <div className='contacts-card-type'>
                    <h4>{type}</h4>
                </div>
                <div className='contacts-card-adress'>
                    <p><a href="">{adress}</a></p>
                </div>
            </div>
        </div>
    )
}
