import React from 'react'
import Button from '../Button/Button'
import './BiletCard.css'
import { ArrowRight, GlobeCentralSouthAsia, HouseFill, Person, PersonFill } from 'react-bootstrap-icons'

export default function BiletCard({card2__img, card2__title, card2__subtitle, card2__description, seeOrNotSee, population, area, summa}) {
    return (
        <div>
            <div className="row py-4">
                <div className="col-12 col-xl-4">
                    <img src={card2__img} className='img-fluid bilet-card__img' alt="transport img" />
                </div>
                <div className='col-12 col-xl-7 p-2'>
                    <div className='bilet-header d-flex justify-content-between align-items-center'>
                        <span>
                            <h4>{card2__title}</h4>
                            <p className='bilet-header__subtitle'>{card2__subtitle}</p>
                        </span>
                        <Button text={'Ko\'proq bilish'} />
                    </div>
                    <div className='bilet-card__description'>
                        <p>
                        {card2__description}
                        </p>
                        <div className={seeOrNotSee}>
                            <hr />
                            <div className='hide-box d-flex justify-content-between align-items-center'>
                                <div>
                                    <PersonFill/> <p className='mb-0 d-inline'>{population}</p>
                                </div>
                                <div>
                                    <GlobeCentralSouthAsia/> <p className='mb-0 d-inline'>{area}</p>
                                </div>
                                <div>
                                    <HouseFill/> <p className='mb-0 d-inline'>${summa}</p>
                                </div>
                            </div>
                            <hr />
                            <div className='card-footer'>
                                <a href="">Qiziqmi? <ArrowRight/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
