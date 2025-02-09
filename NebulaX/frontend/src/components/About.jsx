import { useState } from "react";

const About = () => {
    const [about, setAbout] = useState(
        `
        <b>NebulaX E ticaret yazılımı kimdir?</b>

        NebulaX bir e-ticaret web site yazılımıdır. Bir den fazla paketimiz mevcut olacaktır. Ama ilk kurulan ve yazılan <b>NebulaX</b>'dir.
        Bu paket <b>Crew</b> tarafından yazılıp, geliştirilmiştir.

        Site de her türlü Valorant Point, Fortnite V, Pubg UC, si satılır.

        Bu yazı <mark>test amaçlı yazılmıştır.</mark>
        `
    )
    return (
        <div style={style.homePage}>
            <div style={style.title}>Hakkımızda</div>
            <div style={style.about}>{about}</div>
        </div>
    )
}

const style = {
    homePage: {
        backgroundColor: 'white',
        width: '70%',
        height: '400px',
        borderRadius: '20px',
        textAlign: 'center',
        border: '3px solid rgb(43, 124, 205)',
        margin: 'auto',
        marginTop: '100px'
    },

    title: {
        color: 'rgba(43, 124, 205)',
        fontWeight: 'bold',
        fontSize: '30px',
        marginTop: '40px',
    },

    about: {
        width: '80%',
        margin: 'auto',
        marginTop: '25px',
        fontSize: '18px'
    }
}

export default About;