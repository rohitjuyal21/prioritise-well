import React, { useState } from 'react'

const Cards = () => {
    const [cards, setCards] = useState([]);

    const createCard = (e) => {
        const offsetX = (e.nativeEvent.clientX / window.innerWidth) * 100
        const offsetY = e.nativeEvent.clientY
        setCards([...cards, { cardInput: "", isDragging: false, position: { x: offsetX, y: offsetY } }])
        console.log(offsetX, offsetY)
    }

    const mouseDown = (e, i) => {
        const updatedCards = [...cards];
        updatedCards[i].isDragging = true;
        setCards(updatedCards)
        console.log(cards)
        console.log('x =', cards[i].position.x, 'y =', cards[i].position.y)
        const offsetX = (e.clientX / window.innerWidth) * 100 - updatedCards[i].position.x;
        const offsetY = e.clientY - updatedCards[i].position.y;
        console.log("offsetx", offsetX, "offsety", offsetY)

        const mouseMove = (ev) => {
            if (cards[i].isDragging) {
                const updatedCards = [...cards];
                updatedCards[i].position.x = (ev.clientX / window.innerWidth) * 100 - offsetX
                updatedCards[i].position.y = ev.clientY - offsetY
                setCards(updatedCards)
                console.log('x =', cards[i].position.x, 'y =', cards[i].position.y)

            }
        }

        const mouseUp = () => {
            const updatedCards = [...cards];
            updatedCards[i].isDragging = false;
            setCards(updatedCards)
            document.removeEventListener('mousemove', mouseMove)
            document.removeEventListener('mouseup', mouseUp)
        }

        document.addEventListener('mousemove', mouseMove)

        document.addEventListener('mouseup', mouseUp)

    }

    const deleteCard = (i) => {
        setCards(cards => cards.filter((item, index) => index !== i))
    }


    return (
        <div className='cards'>
            <div className='cards__abs' onClick={createCard}></div>
            {cards.map((card, i) => (
                <div
                    className='card'
                    key={i}
                    style={{ left: `${card.position.x}%`, top: `${card.position.y}px` }}
                >
                    <div className='card__header'>
                        <h2 className='card__number'>Card {i + 1}</h2>
                        <div
                            className='card__header--abs'
                            onMouseDown={e => mouseDown(e, i)}
                            style={{ cursor: `${cards[i].isDragging ? 'grabbing' : 'grab'}` }}
                        >
                        </div>
                        <span
                            className='card__delete'
                            onClick={() => deleteCard(i)}>
                            <i className="fa-solid fa-xmark"></i>
                        </span>
                    </div>
                    <div className='card__input--container'>
                        <textarea name="" id="" rows="6" placeholder='Type here' className='card__input'></textarea>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Cards