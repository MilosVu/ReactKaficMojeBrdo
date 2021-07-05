import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src='./../images/capuccino.jpg'
                        text="Kapučino je vrsta kafe s mlečnom penom na vrhu. Pravi se mašinom za espreso, koji se sipa u donju trećinu šolje. Zatim se doda slična količina mleka i na kraju pena, koja može biti ukrašena mlečnim crtežima. Po vrhu se može posuti mlevena čokolada, običan šećer, cimet ili drugi začini. Nekad se u kafu uspe i topljena čokolada pre mleka. Kapučino se servira sa malom kašikom."
                        label="Capuccino"
                        path="/ponuda"
                        />
                        <CardItem
                        src='./../images/turkish.jpg'
                        text="Crna kafa koju većina nas svakodnevno pije mešavina je više vrsta ove biljke. Iza jednostavnog naziva KAFA zapravo se krije mešavina dve biljke iste botaničke grupe ali različite vrste, poznate kao Arabika i Robusta."
                        label="Turska"
                        path="/ponuda"/>
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                        src='./../images/latte.jpg'
                        text="Kafa late je vrsta kafenog napitka sa toplim mlekom. Postoji i ledena kafa late. Kafa late je italijanskog porekla gde se naziva caffè e latte (bukvalno prevedeno „kafa i mleko”). Late je popularan u mnogim zemljama, mada ne u svojoj izvornoj, italijanskoj, varijanti."
                        label="Latte"
                        path="/ponuda"/>
                        <CardItem
                        src='./../images/espresso.jpg'
                        text="Espreso (ital. espresso) jeste vrsta napitka od kafe italijanskog porekla. Dobija se prolaskom vode pod velikim pritiskom kroz mlevenu, usitnjenu kafu. Espreso je uglavnom gušći od kafe koja se pravi drugim metodama, ima veću koncentraciju suspendovanih i rastvorenih čvrstih materija, a na vrhu ima kremu (pena sa kremastom konzistencijom)."
                        label="Espresso"
                        path="/ponuda"/>
                        <CardItem
                        src='./../images/espressomilk.jpg'
                        text="Najfiniji italijanski espresso sa mlekom."
                        label="Espresso sa mlekom"
                        path="/ponuda"/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
