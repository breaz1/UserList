import React from 'react';

class Headder extends React.Component
{
  render()
  {
    return(
    <header className='header'>
      {this.props.title}
      </header>
    )
  }

}

export default Headder