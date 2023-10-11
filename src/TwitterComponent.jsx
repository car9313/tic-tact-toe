import { useState } from "react"
export function TwitterComponent({children, username, inicialIsFollowing}) {

 const [isFollowing, setIsFollowing]= useState(inicialIsFollowing);
 const text = isFollowing? 'Siguiendo': 'Seguir'
 const buttonClassName = isFollowing? 'article__button is-following': 'article__button'
 const onFollowing= ()=>setIsFollowing(!isFollowing)
return (
<article className="article container">
    <section className="article__dataUser container" >
    <img src={`https://unavatar.io/${username}`} alt="El avatar de github" className="article__img" />
    <div className="article__textUser container">
        <strong className="article__dataUser--name">{children}</strong>
        <span className="article__dataUser--username">@{username}</span>
    </div>
    </section>
    <section className="article__buttons">
    <button className={buttonClassName} onClick={onFollowing}>
                    <span className="article__button--textFollowing">{text}</span>
                    <span className="article__button--textStopFollowing">Dejar de Seguir</span>
    </button>
    </section>
</article>
)
}