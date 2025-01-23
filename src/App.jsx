

import componentImage from './assets/components.png';
import propsImg from './assets/config.png';
import jsxImg from './assets/jsx-ui.png';
import stateImg from './assets/state-mgmt.png';
import CoreConcepts from './components/CoreConcepts.jsx';
import Header from './components/Header/Header.jsx';
import Section from './components/Section.jsx';
import TabButton from './components/TabButton.jsx';
import React from 'react';

const coreObjects = [{
  id: 1,
  title: 'Components',
  description: 'The core of UI building block.',
  image: componentImage
}, {
  id: 2,
  title: 'JSX',
  description: 'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
  image: jsxImg
}, {
  id: 3,
  title: 'Props',
  description: 'Make components configurable (and therefore reusable) by passing input data to them.',
  image: propsImg
}, {
  id: 4,
  title: 'State',
  description:  'React-managed data which, when changed, causes the component to re-render & the UI to update.',
  image: stateImg
},
];

export const EXAMPLES = {
  components: {
    title: 'Components',
    description:
      'Components are the building blocks of React applications. A component is a self-contained module (HTML + optional CSS + JS) that renders some output.',
    code: `
function Welcome() {
  return <h1>Hello, World!</h1>;
}`,
  },
  jsx: {
    title: 'JSX',
    description:
      'JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript (e.g., it may output dynamic content).',
    code: `
<div>
  <h1>Welcome {userName}</h1>
  <p>Time to learn React!</p>
</div>`,
  },
  props: {
    title: 'Props',
    description:
      'Components accept arbitrary inputs called props. They are like function arguments.',
    code: `
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`,
  },
  state: {
    title: 'State',
    description:
      'State allows React components to change their output over time in response to user actions, network responses, and anything else.',
    code: `
function Counter() {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible(true);
  }

  return (
    <div>
      <button onClick={handleClick}>Show Details</button>
      {isVisible && <p>Amazing details!</p>}
    </div>
  );
}`,
  },
};

function App() {
  const [selectedTab, setSelectedTab] = React.useState('components');
  function handleClick(val) {
    console.log('handleClick...');
    setSelectedTab(val);
  }

  return (
    <div>
      <Header/>
      <main>
      <Section id='core-concepts' title={'Core Concepts'}>
        <ul>
          <CoreConcepts val={coreObjects[0]}/>
          <CoreConcepts val={coreObjects[1]}/>
          <CoreConcepts val={coreObjects[2]}/>
          <CoreConcepts val={coreObjects[3]}/>
        </ul>
        </Section>
        <h2>Time to get started!</h2>
        <Section id='examples' title={'Examples'}>
          <menu>
            <TabButton isSelected={selectedTab === 'components' ? 'active': null} onClick={() => handleClick('components')}>Components</TabButton>
            <TabButton isSelected={selectedTab === 'props' ? 'active': null} onClick={() => handleClick('props')}>Props</TabButton>
            <TabButton isSelected={selectedTab === 'jsx' ? 'active': null} onClick={() => handleClick('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTab === 'state' ? 'active': null} onClick={() => handleClick('state')}>State</TabButton>
          </menu>
        </Section>
        <div>
          <h3>{EXAMPLES[selectedTab].title}</h3>
          <p>{EXAMPLES[selectedTab].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTab].code}</code>
          </pre>
        </div>
      </main>
    </div>
  );
}

export default App;