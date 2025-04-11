import React from 'react';
import ReactLoading from 'react-loading';
 
const Loading = ({ type, color,delay }) => (
    <ReactLoading type={type} color={color} height={667} width={375} delay={delay}/>
);
 
export default Loading;