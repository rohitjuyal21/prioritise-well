import React, { useState, useEffect } from 'react'

const Cards = () => {
    const [cards, setCards] = useState(JSON.parse(localStorage.getItem('cards')) || []);
    // const [zIndex, setZIndex] = useState(1);
    // Get cards from local storage
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('cards'));
        if(items) {
            console.log(cards)
            setCards(items)
        }
    }, [])

    // Add cards to local storage 
    useEffect(() => {
      localStorage.setItem('cards', JSON.stringify(cards))
      console.log("Local storage set");
    }, [cards])

    const createCard = (e) => {
        const offsetX = (e.nativeEvent.clientX / window.innerWidth) * 100
        const offsetY = e.nativeEvent.clientY;
        
        setCards([...cards, { cardInput: "", isDragging: false, position: { x: offsetX, y: offsetY } }])
    }

    const inputHandler = (e, i) => {
        const input = e.target.value
        const updatedCards = [...cards];
        updatedCards[i].cardInput = input;
        setCards(updatedCards)
    } 

    const mouseDown = (e, i) => {
        const updatedCards = [...cards];
        updatedCards[i].zIndex +=  1
        updatedCards[i].isDragging = true;
        setCards(updatedCards)

        const offsetX = (e.clientX / window.innerWidth) * 100 - updatedCards[i].position.x;
        const offsetY = e.clientY - updatedCards[i].position.y;
        
        const mouseMove = (ev) => {
            if (cards[i].isDragging) {
                const updatedCards = [...cards];
                updatedCards[i].position.x = (ev.clientX / window.innerWidth) * 100 - offsetX
                updatedCards[i].position.y = ev.clientY - offsetY
                setCards(updatedCards)
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
                        <textarea 
                        rows="4" 
                        placeholder='Type here' 
                        className='card__input'
                        spellCheck='false'
                        onInput={(e) => inputHandler(e, i)}></textarea>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Cards