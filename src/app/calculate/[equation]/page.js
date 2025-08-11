'use client'

export default function Page({ params }) {
  // params.id comes directly from the URL

  // const cannot be used since nerdamer gets modified when other modules are loaded  
  var nerdamer = require('nerdamer'); 
  // Load additional modules. These are not required.  

  var solution = nerdamer(params.equation);
  return (
    <div className="grid items-center justify-items-center">
      <div className="grid items-left justify-items-left">
        <h1>You entered: {params.equation}</h1>
        <p>{solution.text()}</p>
      </div>
    </div>
  );
}