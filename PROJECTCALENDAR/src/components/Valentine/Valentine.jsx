import React, { useState, useRef, useEffect } from 'react';
import style from './Valentine.module.scss';

export default function Valentine() {
    let [name, setName] = useState("");
    let [message, setMessage] = useState("");
    let [hearts, setHearts] = useState(0);
    // Масив для фонових сердечок
    let [bgHearts, setBgHearts] = useState([]);

    let inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
        // Генеруємо 15 випадкових сердечок для фону
        const generated = Array.from({ length: 15 }).map((_, i) => ({
            id: i,
            left: Math.random() * 100 + "%",
            delay: Math.random() * 5 + "s",
            duration: 5 + Math.random() * 10 + "s",
            size: 10 + Math.random() * 30 + "px"
        }));
        setBgHearts(generated);
    }, []);

    useEffect(() => {
        setHearts(Math.floor(message.length / 10));
    }, [message]);

    return (
        <div className={style.wrapper}>
            {/* Анімований фон */}
            <div className={style.heartBg}>
                {bgHearts.map(h => (
                    <span
                        key={h.id}
                        style={{
                            left: h.left,
                            animationDelay: h.delay,
                            animationDuration: h.duration,
                            fontSize: h.size
                        }}
                    >
                        ❤️
                    </span>
                ))}
            </div>

            <div className={style.content}>
                <div className={style.inputs}>
                    ❤️❤️❤️
                    <label>Для кого</label>
                    <input
                        type="text"
                        ref={inputRef}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ім'я..."
                    />

                    <label>Повідомлення</label>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Текст привітання..."
                    />

                </div>

                {name && (
                    <div className={style.valentinka}>
                       
                        <h1>{name}</h1>
                        <p>{message}</p>
                        <div className={style.heartsCount}>
                            {"❤️".repeat(hearts)}
                        </div>
                    </div>

                )}
            </div>
        </div>)}