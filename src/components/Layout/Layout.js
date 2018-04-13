import React, {Fragment } from 'react';

const layout = (props) => (
  <Fragment>
    <div>Nagłówek</div>
      <main>
        {props.children}
      </main>
  </Fragment>

)

export default layout;
