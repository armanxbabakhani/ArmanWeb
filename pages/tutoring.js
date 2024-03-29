import React , { useState } from "react";
import styles from '../styles/Tutoring_v2.module.css'
import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'

const Fixed_top = styled.div`
background: linear-gradient(180deg , gray , gray);
width: 100%;
position: fixed;
border-bottom: 10px solid #090808;
top: 75px;
height: 80px;
z-index: 1;
`
const Icon_background = styled.div`
background-image: url(${props => props.img});
background-size: cover;
background-color: black;
margin: 4%;
height: 180px;
width: 340px;
border-radius: 15px;
box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
filter: brightness(60%);
transition: all 500ms ease-in-out;


:hover{
    filter: brightness(80%);
    cursor: ${props => props.curs};
}

&.clicked{
    align-items: left;
    width: 400px;
    height: auto;
    filter: brightness(70%);
    background: rgb(41,41,41);
    cursor: zoom-out;
}

@media (max-width: 600px) {
    height: 125px;
    width: 250px;

    &.clicked{
        width: 350px;
    }


}
`
const Title = styled.div`
  color: white;
  font-size: 1.5rem;
  font-family: Segoe UI;
  position: relative;
  bottom: -70%;
  text-align: center;
  mix-blend-mode: normal;

  @media (max-width: 600px) {
    font-size: 1.25rem;
  }
`;

const Description = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: white;
  font-size: 1.35rem;
  line-height: 1.75rem;
  margin: 15px 25px;
  line-style-position: outside;
  font-family: Segoe UI;
  @media (max-width: 600px) {
    font-size: 1.1rem;
    margin: 15px;
  }
`;

const StyledCont = styled.div`
display: flex;
flex-direction: row;
align-content: space-around;
margin: 10px 20px;
font-size: 1.35rem;
font-family: Segoe UI;
cursor: pointer;
@media (max-width: 600px) {
    font-size: 1.1rem;
  }
`
const StyledText = styled.div`
color: white;
margin: 8px 5px 0;
text-align: center;
`

const Contact = styled.div`
font-size: 120%;
font-family: Segoe UI;
padding: 5% 0px 10%;
margin: 0 5px;
display: flex;
flex-wrap: wrap;
justify-content: left;
align-items: left;
`
export default function Tutoring() {
    const [isClicked, setIsClicked] = useState(false);
    const [isClicked2, setIsClicked2] = useState(false);
    const [isClicked3, setIsClicked3] = useState(false);
    return(
        <body className={styles.container}>
            <Fixed_top/>
            <div className={styles.logo}>
                <Image src="/main_logo.png" alt="Future logo" width={100} height={100} />
            </div>
            <div className={styles.background}>
                <div className={styles.textbox}>
                    <div className={styles.text}>
                        <h1>Learning requires patience and good mentorship</h1>
                        <p> To book a tutoring session, contact me by clicking on the Contact icon.</p>
                    </div>
                </div>
                <div className={styles.iconwrap}>
                    <Icon_background img="contact_icon_1.png" curs="zoom-in" className={isClicked3 ? "clicked" : ""} onClick={()=> setIsClicked3(!isClicked3)}>
                        {isClicked3 ? 
                            <Contact>
                                <StyledCont>
                                    <Image src="/email_logo.png" width="40px" height="40px"/>
                                    <Link href="mailto:armanxbabakhani@gmail.com" passHref>
                                        <StyledText>
                                        armanxbabakhani(at)gmail.com
                                        </StyledText>
                                    </Link> 
                                </StyledCont>
                                <StyledCont>
                                    <Image src="/linkedin.png" width="40px" height="40px"/>
                                    <Link href="https://www.linkedin.com/in/arman-babakhani/" passHref>
                                        <StyledText>
                                        LinkedIn
                                        </StyledText>
                                    </Link> 
                                </StyledCont>
                            </Contact>: <Title> Contact </Title>}
                    </Icon_background>
                </div>
                <div className={styles.textbox}>
                    <div className={styles.text}>
                        <p> I along with other PhD students provide expert tutoring for high school classes, Undergraduate, and Graduate courses. Click the icon below for a concise list of courses and topics.</p>
                    </div>
                </div>
                <div className={styles.iconwrap}>
                    <Icon_background img="subjects_icon_low.png" curs="zoom-in" className={isClicked2 ? "clicked" : ""} onClick={()=> setIsClicked2(!isClicked2)}>
                        {isClicked2 ? <Description> <li>AP Calculus and Physics</li> <li>AP Chemistry</li> <li>Undergraduate Mathematics</li> <li>Undergraduate and Graduate Physics</li> <li> General Undergraduate Chemistry</li> <li> Introductory Computer-Science </li> <li> Additional Engineering Courses </li></Description> : <Title> Subjects </Title>}
                    </Icon_background>
                </div>
                <div className={styles.textbox}>
                    <div className={styles.text}>
                        <p> We are a group of expert PhD students with publications in the field of theoretical and computational physics. Check out Arman <a><Link href="/projects" passHref>publications</Link></a>, and click the icon below for his tutoring qualifications. </p>
                    </div>
                </div>
                <div className={styles.iconwrap}>
                    <Icon_background img="experience_icon_low.png" curs="zoom-in" className={isClicked ? "clicked" : ""} onClick={()=> setIsClicked(!isClicked)}>
                        {isClicked ? <Description> <li> A PhD Candidate at USC in theoretical Physics</li> <li>Author of various research papers in the field of quantum information.</li> <li> More than 8 years of experience. More than hundreds of students in advanced topics in mathematics, physics, and engineering courses.</li></Description> : <Title> Qualifications </Title>}
                    </Icon_background>
                </div>
                
                <div className={styles.textbox}>
                    <div className={styles.text}>
                        <p> You can also see my tutoring reviews below, on Wyzant.com.</p>
                    </div>
                </div>
                
                <div className={styles.iconwrap}>
                    <Link href="https://www.wyzant.com/Tutors/ArmanB" passHref>
                        <Icon_background img="/reviews_icon_low.png" curs="pointer">
                            <Title> Reviews </Title>
                        </Icon_background>
                    </Link>
                </div>

                <div className={styles.textbox}>
                    <div className={styles.text}>
                        <p> To check out some of my tutoring videos, click on the icon below.</p>
                    </div>
                </div>

                <div className={styles.iconwrap}>
                    <Link href="https://www.youtube.com/channel/UCtuf8lx4SvE3hEZe7NuagzA" passHref>
                        <Icon_background img="videos_icon.png" curs="pointer">
                            <Title> Videos </Title>
                        </Icon_background>
                    </Link>
                </div>
            </div>
        </body>
        
    )
}