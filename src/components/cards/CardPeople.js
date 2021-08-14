import React from 'react'
import { GetUrlPeopleByIdFIlm } from '../../helper/GetUrlPeopleByIdFIlm'


export const CardPeople = ({id}) => {
    const filmspeople=GetUrlPeopleByIdFIlm(id)
    console.log(filmspeople)
    return (
        <div>
            <h1>People</h1>
        </div>
    )
}
