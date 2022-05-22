import React from 'react'
import styled from 'styled-components';
 import { useState, useEffect } from 'react';
 import { useParams } from 'react-router';
 import db from '../firebase';
import { setUserLoginDetails } from '../features/user/userSlice';


function Detail() {

    const {id} = useParams()
    const [detail, setDetail] = useState({
        backgroundImg: '',
        titleImg: '',
        subTitle: '',
        description: ''
    });

    useEffect(() => {
        db.collection('movie-data')
        .doc(id)
        .get()
        .then((doc)=>{
            if(doc.exists){
                //save the movie data
                setDetail(doc.data());
            }else{
                //redirect to home page.
            }
        })
    }, [id]);

    return (
        <Container>
            <Background>
                <img src={detail.backgroundImg} alt="uppppppp" />
            </Background>
            <ImageTitle>
                <img src={detail.titleImg} alt={detail.title} />
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png" alt="" />
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png" alt="" />
                    <span>TRAILER</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png"/>
                </GroupWatchButton>
            </Controls>
            <SubTitle>
                {detail.subTitle}
            </SubTitle>
            <Description>
                {detail.description}
                
            </Description>
        </Container>
    )
}

export default Detail;

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    position: relative;

`

const Background = styled.div`
    position: fixed;
    top:0;
    bottom: 0;
    left:0;
    right: 0;
    z-index:-1;
    opacity: 0.8;

    img{
        width: 100vw;
        height: 100vh;
        object-fit: cover;
    }

    @media (max-width: 768px){
        width: initial;
    }

`

const ImageTitle = styled.div`
    height: 30vh;
    min-height:170px;
    width:35vw;
    min-width:200px;
    margin-top: 60px;
    img{
        width:100%;
        height:100%;
        object-fit:contain;
    }

`

const  Controls = styled.div`
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    margin:24px 0px;
    min-height:56px; 

`

const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    display: flex;
    align-items: center;
    height: 56px;
    background: rgb(249, 249,249);
    border: none;
    padding:0 24px;
    margin-right: 22px;
    letter-spacing: 1.8px;
    cursor:pointer;
    img{
        width: 32px;
    }
    &:hover{
        background: rgb(198,198,198);
    }

    @media (max-width: 768px){
        height: 45px;
        padding: 0px 12px;
        font-size: 12px;
        margin: 0px 10px 0px 0px;
        img{
            width: 25px;
        }
    }

`

const TrailerButton = styled(PlayButton)`

    background: rgba(0,0,0,0.3);
    border: 1px solid rgb(249,249,249);
    color: rgb(249,249,249);

`

const AddButton = styled.button`
    margin-right: 16px;
    width:44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgba(0,0,0,0.6);
    cursor: pointer;

    span{
        font-size: 32px;
        color: white;
    }

`

const GroupWatchButton = styled(AddButton)`
    background: black;
`
const SubTitle = styled.div`
    color: rgb(249,249,249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 28px;
    @media (max-width: 768px){
        font-size:12px;
        }

`

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249,249,249);
    max-width: 760px;
    @media (max-width: 768px){
        font-size:15px;
        }

`