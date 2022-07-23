import React from 'react';
import './style.css' 
import Skills from './Skills';

const SkillData = [{
    name: 'HTML',
    hrefer: 'https://www.w3schools.com/html/',
},
{
    name: 'CSS',
    hrefer: 'https://www.w3schools.com/css/default.asp',
},
{
    name: 'JavaScript',
    hrefer: 'https://www.w3schools.com/js/default.asp',
},
{
    name: 'Php',
    hrefer: 'https://www.w3schools.com/php/',
},
{
    name: 'Bootstrap5',
    hrefer: 'https://www.w3schools.com/bootstrap5/index.php',
},
{
    name: 'Mysql',
    hrefer: 'https://www.w3schools.com/mysql/',
},
{
    name: 'Oracle',
    hrefer: 'https://www.w3schools.blog/oracle-tutorial',
},
{
    name: 'JAVA',
    hrefer: 'https://www.w3schools.com/java/',
},
{
    name: 'React.js',
    hrefer: 'https://www.w3schools.com/react/',
},
{
    name: 'Python',
    hrefer: 'https://www.w3schools.com/python/default.asp',
},
  ];

  const SkillContainer = () => {
    return (
        <div className="skillContainer">
            {
                SkillData.map(SkillItem=>{
                    return <Skills SkillItem={SkillItem}/>
                })
            }
        </div>
    )
}

export default SkillContainer