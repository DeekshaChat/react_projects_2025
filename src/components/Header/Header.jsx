

import reactImage from '../../assets/react-core-concepts.png';

const reactDescription = ['Fundamental', 'Core', 'Cruicial'];
function genRandomInt(max){
    return Math.floor(Math.random() * (max+1));
  }

export default function Header() {
  const description = reactDescription[genRandomInt(reactDescription.length)];
  
  return (
    <header>
    <img src={reactImage} alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
      {description} React concepts you will need for almost any app you are
      going to build!
    </p>
  </header>
  );
}