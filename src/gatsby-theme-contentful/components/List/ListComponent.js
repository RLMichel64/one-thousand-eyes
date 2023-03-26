import React from 'react';

const officers = [
  {
    email: 'Interested Individuals should inquire about these positions',
    position: 'Officers Not Listed are Currently Vacant',
    name: 'Contact the Seneschal at seneschal@baronyof1000eyes.org',
  },
  {
    email: 'archery@baronyof1000eyes.org',
    position: 'Archery Marshal',
    name: 'Robert the Lost',
  },
  {
    email: 'baron@baronyof1000eyes.org',
    position: 'Baron',
    name: 'Reynhard von Reutte',
  },
  {
    email: 'baroness@baronyof1000eyes.org',
    position: 'Baroness',
    name: 'Crestina da Brescia',
  },
  // {
  //   email: 'chatelaine@baronyof1000eyes.org',
  //   position: 'Chatelaine',
  // },
  {
    email: 'chronicler@baronyof1000eyes.org',
    position: 'Chronicler',
    name: 'Wolfgang von Allers',
  },
  {
    email: 'exchequer@baronyof1000eyes.org',
    position: 'Exchequer',
    name: 'Hildegard von den Pfauen',
  },
  // {
  //   email: 'deputy.exchequer@baronyof1000eyes.org',
  //   position: 'Deputy Exchequer',
  // },
  // {
  //   email: 'herald@baronyof1000eyes.org',
  //   position: 'Herald',
  // },
  {
    email: 'knight.marshal@baronyof1000eyes.org',
    position: 'Knight Marshal',
    name: 'Robert the Lost',
  },
  // {
  //   email: 'deputy.knight.marshal@baronyof1000eyes.org',
  //   position: 'Deputy Knight Marshal',
  // },
  {
    email: 'listminister@baronyof1000eyes.org',
    position: 'Minister of the List',
    name: 'Symmone de St Maurdes Fossez',
  },
  {
    email: 'moas@baronyof1000eyes.org',
    position: 'Minister of Arts and Sciences',
    name: 'Helena Handbasket',
  },
  // {
  //   email: 'deputy.moas@baronyof1000eyes.org',
  //   position: 'Deputy Minister of Arts and Sciences',
  // },
     {
       email: 'quartermaster@baronyof1000eyes.org',
       position: 'Quartermaster',
       name: 'Sheelaegh Mac Cathail',
  // },
  // {
  //   email: 'deputy.quartermaster@baronyof1000eyes.org',
  //   position: 'Deputy Quartermaster',
  // },
     {
       email: 'rapier@baronyof1000eyes.org',
       position: 'Rapier Marshal',
       name: 'Robert the Lost',
      },
  // {
  //   email: 'deputy.rapier.marshal@baronyof1000eyes.org',
  //   position: 'Deputy Rapier Marshal',
  // },
  {
    email: 'seneschal@baronyof1000eyes.org',
    position: 'Seneschal',
    name: 'Ariel of York',
  },
  // {
  //   email: 'deputy.seneschal@baronyof1000eyes.org',
  //   position: 'Deputy Seneschal',
  //   name: 'Yuri the Yakslapper',
  // },
  // {
  //   email: 'deputy2nd.seneschal@baronyof1000eyes.org',
  //   position: 'Deputy Seneschal',
  //   name: 'Yuri the Yakslapper',
  // },
  // {
  //   email: 'smo@baronyof1000eyes.org',
  //   position: 'Social Media Officer',
  // },
  // {
  //   email: 'thrown.weapons.marshal@baronyof1000eyes.org',
  //   position: 'Thrown Weapons Marshal',
  // },
  // {
  //   email: 'deputy.thrown.weapons@baronyof1000eyes.org',
  //   position: 'Deputy Thrown Weapons Marshal',
  // },
  // {
  //   email: 'webminister@baronyof1000eyes.org',
  //   position: 'Web Minister',
  //   name: 'Leonardo Serafino',
  },
  // {
  //   email: 'deputy.web.minister@baronyof1000eyes.org',
  //   position: 'Deputy Web Minister',
  // },
  // {
  //   email: 'youth.marshal@baronyof1000eyes.org',
  //   position: 'Youth Marshal',
  // },
  // {
  //   email: 'youth.minister@baronyof1000eyes.org',
  //   position: 'Youth Minister',
  // },
];

export default function ListComponent() {
  return (
    <div>
      <ul className="text-left list-none" aria-label="barony officers">
        {officers.map(({ email, position, name }, index) => {
          return (
            <li
              className="my-3"
              custom={index}
              key={`officer_link${index}`}
              variants={position}
            >
              <a className=" no-underline" href={`mailto:${email}`}>
                <span
                  className="font-semibold text-blue-700 text-xl hover:text-blue-800"
                  style={{ textShadow: '2px 2px #ddd' }}
                >{`${position}`}</span>

                <br />
                <span
                  className="text-gray-800 text-base"
                  style={{ textShadow: '2px 2px #ddd' }}
                >{`${email}`}</span>
                <br />
                <span
                  className="text-gray-800 text-base"
                  style={{ textShadow: '2px 2px #ddd' }}
                >{`${name}`}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
