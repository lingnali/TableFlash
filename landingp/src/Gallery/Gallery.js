
import React from 'react';
import {
    useLocation,
} from "react-router-dom";

import UserGrid from '../Profile/UserGrid';
import {Link} from 'react-router-dom';
import styled, {css} from 'styled-components';
import Posts from "../Posts";
import {Image} from '../App';

const PhotoGrid = styled.div`
  display: grid; 
  grid-template-columns: repeat(3, 305px); 
  justify-content: center; 
  gap: 20px; 
  grid-auto-rows: 305px; 
  ${({cascade}) => cascade && css`
    grid-auto-rows: 200px; 
    grid-gap: 5px; 
  `}
  @media (max-width: 990px) {
    gap: 5px; 
    grid-template-columns: repeat(3, 1fr); 
    grid-auto-rows: calc(33vw - 10px); 
  }
`

const LinkGrid = styled.div`
  display: grid; 
  grid-template-columns: auto auto; 
  justify-content: center; 
  gap: 20px; 
  margin-bottom: 20px; 
`

const TabLink = styled(Link)`
  text-decoration: none; 
  color: #ccc; 
  text-transform: uppercase; 
  letter-spacing: 3px; 
  ${({selected}) => selected && 'color: black;'}
`

//to={{pathname: `${match.url}`, search:"?type=cascade"}}
export function Gallery() {
    let location = useLocation();
  
    return (
      <div>
        <UserGrid/>
        <LinkGrid>
            <TabLink to={'/gallery'}>
                POSTS
            </TabLink>
            <TabLink to={{pathname: '/gallery', search:"?type=cascade"}}> 
                TAGGED
            </TabLink>
        </LinkGrid>
        <PhotoGrid>
          {Posts.map(i => (
            <Link
              key={i.id}
              to={{
                pathname: `/img/${i.id}`,
                // This is the trick! This link sets
                // the `background` in location state.
                state: { background: location }
              }}
            >
              <Image index={i.id} />
            </Link>
          ))}
        </PhotoGrid>
      </div>
    );
  }