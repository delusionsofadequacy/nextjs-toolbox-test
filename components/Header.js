import React, { useState } from "react";

export default function Header({ title }) {

  function AlternatingLetters({ text }) {
    const [transform, setTransform] = useState('skew(-10deg)');
    const [fontSize, setFontSize] = useState('1.2em');
  
    const letters = text.split('').map((char, index) => {
      const style = {
        transform: index % 2 === 0 ? transform : '',
        fontSize: index % 2 === 0 ? fontSize : '',
        cursor: 'pointer',
      };
  
      return (
        <span
          key={index}
          style={style}
          onClick={() => {
            setTransform(transform === 'skew(-10deg)' ? 'skew(10deg)' : 'skew(-10deg)');
            setFontSize(fontSize === '1.2em' ? '1.5em' : '1.2em');
          }}
        >
          {char}
        </span>
      );
    });
  
    return <>{letters}</>;
  }
  

  return (
    <>
      <h1 className="title">{title}</h1>
      <p>
      <AlternatingLetters text="This is a test website for messing around" />
      </p>
      <p>
        <AlternatingLetters text='Hi! This template gives you a' />{" "}
        <a href="https://nextjs.org/"><AlternatingLetters text='Next.js' /></a> <AlternatingLetters text='app with the scaffolding for '/>{" "}
        <a href="https://www.netlify.com/products/functions/">
        <AlternatingLetters text='Netlify Functions' />
        </a>
        , <a href="https://www.netlify.com/products/forms/"><AlternatingLetters text='forms' /></a>, <AlternatingLetters text='and' />{" "}
        <a href="https://docs.netlify.com/routing/redirects/"><AlternatingLetters text='redirects' /></a>
        <AlternatingLetters text='. Our
        aim was to give you the code you would need to hit the ground running
        with a few fun features.' />
        
      </p>

      <p><AlternatingLetters text='You can find the code for this project on GitHub at' />
        {" "}
        <a href="https://github.com/netlify-templates/nextjs-toolbox">
        <AlternatingLetters text='https://github.com/netlify-templates/nextjs-toolbox' />
        </a>
        <AlternatingLetters text='! Happy coding!' />
      </p>
    </>
  );
}
