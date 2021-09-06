---
title: "Container vs Presentational Components in ReactJS"
date: "2017-10-23"
categories: 
  - "reactjs"
---

### Presentational/Functional/Stateless Components

Functional components in ReactJS is a simpler way of creating components. Some of the key features of functional components are:

- It is best suitable for components which only consists of a render method
- They are also called stateless components since they don't have an internal state and just make use of props to display the data
- It is not a class which extends React.Component
- It is just a function which accepts props and returns the rendered component
- You can define propTypes and defaultProps on the function

```javascript
let helloComponent = (props) => { return(
  {props.name}
)}

helloComponent.propTypes = { name : React.PropTypes.string.isRequired }
helloComponent.defaultProps = { name : 'Gagandeep' }`
```

### Container Components

Container components on the other hand are more concerned about how things work rather than how things look. Main features of a container components are:

- Suitable when components need to have their own state
- It can have all the lifecycle methods of a React component
- Communicate to Flux/Redux via actions and receive data from them, which is passed to other presentational or container components
- Contains presentational and container components within itself

```javascript
class helloComponent extends React.Component{ render(){ return(
{this.props.name}

) } }
helloComponent.propTypes = { name : React.PropTypes.string.isRequired }
helloComponent.defaultProps = { name : 'Gagandeep' }
```
