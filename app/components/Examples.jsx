var React = require('react');
var {Link} = require('react-router');
var Examples = ()=>{
  return (
      <div>
        <h1 className="text-center">Examples</h1>
        <p>Here are few locations to try it</p>
        <ol>
          <li>
            <Link to="/?location=Toronto">Toronto,Ontario</Link>
          </li>
          <li>
            <Link to="/?location=London">London,Ontario</Link>
          </li>
          <li>
            <Link to="/?location=Ottowa">Ottowa,Ontario</Link>
          </li>
          <li>
            <Link to="/?location=Winsor">Winsor,Ontario</Link>
          </li>

        </ol>
      </div>
  );
};
module.exports = Examples
