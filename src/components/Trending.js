import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { selectTrending } from '../features/movie/movieSlice';
import { useSelector } from 'react-redux';


function Trending() {
    const trendingmoviesdata = useSelector(selectTrending)


    return (
        <Container>
            <h4>Trending</h4>
             <Content>
                {
                    trendingmoviesdata && trendingmoviesdata.map((data, index)=>(
                        <Wrap key={index}>
                            <Link to={'/detail/'+ data.id}>
                                <img  src={data.cardImg} alt={data.title} />
                            </Link>
                        </Wrap>
                    ))
                }


                 <Wrap>
                     <Link to='/'>
                         <img src="/images/good-dino.png" alt="" />
                     </Link>
                 </Wrap>

                 <Wrap>
                     <Link to='/'>
                         <img src="/images/ralph.jpeg" alt="" />
                     </Link>
                 </Wrap>

                 <Wrap>
                     <Link to='/'>
                         <img src="/images/good-dino.png" alt="" />
                     </Link>
                 </Wrap>

                 <Wrap>
                     <Link to='/'>
                         <img src="/images/good-dino.png" alt="" />
                     </Link>
                 </Wrap>
             </Content>
        </Container>
    )
}

export default Trending;

const Container = styled.div`
    padding: 0 0 26px;

`;

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));

    @media (max-width: 768px){
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

`;

const Wrap = styled.div`
    
    border-radius: 8px;
    cursor: pointer;
    overflow: hidden;
    border: 3px solid rgba(249,249,249,0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25,0.46, 0.45, 0.94) 0s;


    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover{
        //transform: scale(1.05 );
        box-shadow: rgb(0 0 0 / 79%) 0px 40px 58px -16px,
        rgb(0 0 0 / 73%) 0px 30px 22px -10px;
        border-color: rgba(249,249,249,0.8);
    }  
`;