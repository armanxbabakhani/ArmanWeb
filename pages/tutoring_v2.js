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
margin: 10px 20px;
height: 180px;
width: 340px;
border-radius: 15px;
box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
filter: brightness(40%);
transition: all 300ms;

:hover{
    filter: brightness(80%);
    cursor: ${props => props.curs};
}

&.clicked{
    height: 225px;
    width: 400px;
    filter: brightness(70%);
    background: rgb(41,41,41);
    cursor: zoom-out;
}

@media (max-width: 600px) {
    height: 125px;
    width: 250px;

    &.clicked{
        height: 175px;
        width: 300px;
    }


}
`
const Title = styled.div`
  color: white;
  font-size: 1.5rem;
  font-family: -apple-system;
  position: relative;
  bottom: -70%;
  text-align: center;
  mix-blend-mode: normal;

  @media (max-width: 600px) {
    font-size: 1.25rem;
  }
`;

const Description = styled.div`
  color: white;
  font-size: 1.1rem;
  padding: 15px 35px 0;
  list-style-position: inside;
  text-indent: -20px;
  font-family: Segoe UI;
  position: relative;
  text-align: left;
  mix-blend-mode: normal;
  @media (max-width: 600px) {
    font-size: 0.85rem;
    padding: 15px 30px 0;
  }
`;

const StyledLi = styled.div`
list-style-type: square;
position: relative;
text-align: left;
padding: 10px 15px; 
color: #2c68ac;
font-size: 125%;
font-family: Segoe UI;
cursor: pointer;
@media (max-width: 600px) {
    font-size: 100%;
    padding: 10px;
  }
`
const Contact = styled.div`
font-size: 120%;
padding: 15% 10px;
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
                <div className={styles.iconwrap}>
                    <Icon_background img="experience_icon.png" curs="zoom-in" className={isClicked ? "clicked" : ""} onClick={()=> setIsClicked(!isClicked)}>
                        {isClicked ? <Description> <li> A PhD Candidate at USC in theoretical Physics</li> <li>Author of various research papers in the field of quantum information.</li> <li> More than 8 years of experience in teaching AP Calculus, Physics, and Chemistry. More than hundreds of students in advanced topics in mathematics, physics, and engineering courses.</li></Description> : <Title> Qualifications </Title>}
                    </Icon_background>
                    <Link href="https://www.wyzant.com/Tutors/ArmanB">
                        <Icon_background img="/reviews_icon.png" curs="pointer">
                            <Title> Reviews </Title>
                        </Icon_background>
                    </Link>
                    <Icon_background img="subjects_icon.png" curs="zoom-in" className={isClicked2 ? "clicked" : ""} onClick={()=> setIsClicked2(!isClicked2)}>
                    {isClicked2 ? <Description> <li>AP Calculus and Physics</li> <li>AP Chemistry</li> <li>Undergraduate Mathematics</li> <li>Undergraduate and Graduate Physics</li> <li> General Undergraduate Chemistry</li> <li> Introductory Computer-Science </li> <li> Additional Engineering Courses </li></Description> : <Title> Subjects </Title>}
                    </Icon_background>
                    <Link href="https://www.youtube.com/channel/UCtuf8lx4SvE3hEZe7NuagzA">
                        <Icon_background img="videos_icon.png" curs="pointer">
                            <Title> Videos </Title>
                        </Icon_background>
                    </Link>
                    <Icon_background img="contact_icon_1.png" curs="zoom-in" className={isClicked3 ? "clicked" : ""} onClick={()=> setIsClicked3(!isClicked3)}>
                        {isClicked3 ? <Contact><Description> <li>Email: armanxbabakhani(at)gmail.com</li> </Description> <StyledLi><a href="https://www.linkedin.com/in/arman-babakhani/" className="cursor: pointer; color: #2c6ab0;"><li>LinkedIn</li></a></StyledLi> </Contact>: <Title> Contact </Title>}
                    </Icon_background>
                </div>
            </div>
        </body>
        
    )
}