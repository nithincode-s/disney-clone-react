import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import RecommendMovies from './RecommendMovies'
import Viewers from './Viewers'
import ImgSlider from './ImgSlider'
import Latest from './Latest'
import Originals from './Originals'
import Trending from './Trending'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import db from '../firebase';
import { setMovies } from '../features/movie/movieSlice'
import {selectUserName} from '../features/user/userSlice'


function Home() {

    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    let recommendary = [];
    let newdisneyary = [];
    let originalsary = [];
    let trendingary = [];

    useEffect(() => {
        
        db.collection('movie-data').onSnapshot((snapshot)=>{
            //console.log(snapshot);
            snapshot.docs.map((doc)=>{
                //console.log(doc.data()) 
                switch(doc.data().type){
                    case 'recommend':
                        recommendary = [ ...recommendary , {id: doc.id, ...doc.data()}];
                        //console.log(recommendary);
                        break;
                    case 'new':
                        newdisneyary = [ ...newdisneyary , {id: doc.id, ...doc.data()}];
                        break;
                    case 'original':
                        originalsary = [ ...originalsary , {id: doc.id, ...doc.data()}];
                        break;
                    case 'trending':
                        trendingary = [ ...trendingary , {id: doc.id, ...doc.data()}];
                        break;

                }
            })
            dispatch(setMovies({
                recommend: recommendary,
                newdisney:newdisneyary,
                original:originalsary,
                trending:trendingary
            })
            );

        })

    }, [userName])





    return (
        
        <Container>
            <ImgSlider/>
            <Viewers/>
            <RecommendMovies/>
            <Latest/>
            <Originals/>
            <Trending/>
        </Container>
        
    )
}

export default Home;

const Container = styled.main`
    // min-height: calc(100vh - 70px);
    min-height: calc(100vh);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;
    &:before{
        background: url("/images/home-background.png") center center / cover no-repeat fixed;
        content: "";
        position: absolute;
        top:0;
        right:0;
        left:0;
        bottom:0;
        z-index:-1;
    }

`;
