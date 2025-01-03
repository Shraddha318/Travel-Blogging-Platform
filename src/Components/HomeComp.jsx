import React from 'react';
import Style from './HomeComp.module.css'
import { Heading } from '@chakra-ui/react';
function HomeComp(props) {
    return (
        <div className={Style.parent_homecomp} >
          <Heading as="h1" color="white" size='3xl'>The Travel Book</Heading>
          <Heading as="h4" color="white" size='sm'>Jobs fill your pockets, adventures fill your soul. <br/>Remember that happiness is a way of travel, not a destination.</Heading>
         
        </div>
    );
}

export default HomeComp;