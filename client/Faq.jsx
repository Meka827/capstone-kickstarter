import React from 'react'
import { useState } from 'react';

const faqs = [
    {
        id: 1,
        question: "I'm baby unicorn thundercats vape?",
        answer: "I'm baby messenger bag normcore photo booth, bicycle rights pabst you probably haven't heard of them pok pok semiotics tonx VHS chartreuse iceland copper mug blog glossier. Intelligentsia hexagon vegan, quinoa gentrify meditation post-ironic chartreuse narwhal. Flexitarian big mood praxis, blue bottle scenester selfies cred cardigan wolf truffaut whatever keytar occupy lyft. Flexitarian yuccie schlitz slow-carb austin lumbersexual quinoa squid actually bitters pitchfork synth meggings vaporware. Brunch church-key meditation, DSA keffiyeh freegan stumptown cloud bread. Helvetica subway tile bespoke, tofu tumblr gentrify taiyaki cold-pressed hella bushwick before they sold out gastropub. Locavore twee mustache street art seitan semiotics ennui meditation.",
        date: "Date: January 27, 2023 11:07AM"
    },
    {
        id: 2,
        question: "I'm baby bicycle rights vibecession actually prism drinking vinega?",
        answer: "I'm baby messenger bag normcore photo booth, bicycle rights pabst you probably haven't heard of them pok pok semiotics tonx VHS chartreuse iceland copper mug blog glossier. Intelligentsia hexagon vegan, quinoa gentrify meditation post-ironic chartreuse narwhal. Flexitarian big mood praxis, blue bottle scenester selfies cred cardigan wolf truffaut whatever keytar occupy lyft. Flexitarian yuccie schlitz slow-carb austin lumbersexual quinoa squid actually bitters pitchfork synth meggings vaporware. Brunch church-key meditation, DSA keffiyeh freegan stumptown cloud bread. Helvetica subway tile bespoke, tofu tumblr gentrify taiyaki cold-pressed hella bushwick before they sold out gastropub. Locavore twee mustache street art seitan semiotics ennui meditation.",
        date: "Date: January 27, 2023 11:07AM"
    },
    {
        id: 3,
        question: "I'm baby truffaut whatever synth, kitsch pork belly Brooklyn kinfolk?",
        answer: "I'm baby messenger bag normcore photo booth, bicycle rights pabst you probably haven't heard of them pok pok semiotics tonx VHS chartreuse iceland copper mug blog glossier. Intelligentsia hexagon vegan, quinoa gentrify meditation post-ironic chartreuse narwhal. Flexitarian big mood praxis, blue bottle scenester selfies cred cardigan wolf truffaut whatever keytar occupy lyft. Flexitarian yuccie schlitz slow-carb austin lumbersexual quinoa squid actually bitters pitchfork synth meggings vaporware. Brunch church-key meditation, DSA keffiyeh freegan stumptown cloud bread. Helvetica subway tile bespoke, tofu tumblr gentrify taiyaki cold-pressed hella bushwick before they sold out gastropub. Locavore twee mustache street art seitan semiotics ennui meditation.",
        date: "Date: January 27, 2023 11:07AM"
    },
]

const Faq = () => {

    const [selected, setSelected] = useState(null);

    const toggle = (i) => {
        if(selected === i){
            return setSelected(null)
        }
        setSelected(i)
    }

  return (
    <div className='wrapper'>
        <div className='accordian'>
           
            {faqs.map((item, i) => (
             <div className='item'>
                <div className='faq-question' onClick={() => toggle(i)}>
                    <h2>{item.question}</h2>
                    <span>{selected === i ? '-' : '+'}</span>
                </div>
                <div className={selected === i ? 'faq-answer show' : 'hide'}>{item.answer}</div>
                <div className='faq-date'>{item.date}</div>
            </div>
             ))}

        </div>
    </div>
  )
}

export default Faq
/*.wrapper{
  display: flex;
  height: 100vh;
  width: 100vh;
  justify-content: center;
  align-content: center;
}

.accordian{
  width: 650px;
}

.item{
  background: lightgray;
  margin-bottom: 5px;
  padding: 10px 20px;
}

.faq-question{
  color:black;
  display: flex;
  overflow: hidden;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.faq-answer, .faq-date{
  color: black;
}

.faq-answer.show{
  display: block;
  height: auto;
  max-height: 9999px;
  transition: all 0.5 cubic-bezier(0,1,0,1);
}

.hide{
  display: none;
}*/