export default function ExponentsRules() {
  return (
    <div className="grid items-center justify-items-center min-h-screen">
        <h1>Exponent laws</h1>
        <p>These are the law thats make workign with exponents easier</p>
        <ol className="area">
            <h3>Table of contents</h3>
            <li>
                <a href="#to_the_power_of_1">
                    The power of 1
                </a>
            </li>
            <li>
                <a href="#to_the_power_of_0">
                    The power of 0
                </a>
            </li>
            <li>
                <a href="#multiplication">
                    Multiplication
                </a>
            </li>
            <li>
                <a href="#division">
                    Division
                </a>
            </li>
            <li>
                <a href="#to_the_power_of_a_power">
                    To the power of a power
                </a>
            </li>
            <li>
                <a href="#multiple_bases">
                    Multiple bases
                </a>
            </li>
            <li>
                <a href="#negavite_exponents">
                    Negative exponents
                </a>
            </li>
            <li>
                <a href="#fraction_exponents">
                    Fraction exponents
                </a>
            </li>
        </ol>
        
        <div className="area">
            <h2 id="to_the_power_of_1">To the power of 1</h2>
            <p>Any number to the power of 1 is just itself.</p>
            <p>This is useful for simplifying, examples below</p>
            <p>x<sup>1</sup>=x</p>
            <p>4<sup>1</sup>=4</p>
            <p>300<sup>1</sup>=300</p>
            <p>-29<sup>1</sup>=-29</p>
        </div>
        <div id="to_the_power_of_0" className="area">
            <h2>To the power of 0</h2>
            <p>The power of 0 is a simular case, but instead it make the number equal to 1</p>
            <p>Another way to think about it is x<sup>1</sup>*<sup>-1</sup>=x/x=1</p>
            <p>It is also equal to x<sup>1</sup>+<sup>-1</sup>=x<sup>0</sup></p>
            <p>Again, useful for simplifying, examples below</p>
            <p>x<sup>0</sup>=1</p>
            <p>-5<sup>0</sup>=1</p>
            <p>20<sup>0</sup>=1</p>
            <p>Except 0, 0<sup>0</sup>=0</p>
            <p>0<sup>everything and anything</sup>=is still 0</p>
        </div>
        <div id="multiplication" className="area">
            <h2>Multiplication</h2>
            <p>Exponents simplify multiplication if the bases are the same</p>
            <p>x<sup>2</sup>*x<sup>3</sup></p>
            <p>Instead of needing to solve manual, we can add exponents</p>
            <p>x<sup>2+3</sup></p>
            <p>x<sup>5</sup></p>
            <p>Remember, only if the base are the same</p>
            <p>y<sup>2</sup>*z<sup>3</sup></p>
            <p>There is nothing this rule can do here</p>
        </div>
        <div id="division" className="area">
            <h2>Division</h2>
            <p>Exponents simplify division as well, if the bases are the same</p>
            <p>x<sup>2</sup>/x<sup>3</sup></p>
            <p>We will subtract exponents</p>
            <p>x<sup>2-3</sup></p>
            <p>x<sup>-1</sup></p>
            <p>Remember, there is still nothing we if the base are different</p>
            <p>y<sup>4</sup>/z<sup>1</sup></p>
            <p>Still nothing that the rule can do here</p>
        </div>
        <div id="to_the_power_of_a_power" className="area">
            <h2>To the power of a power</h2>
            <p>Exponents can also have exponents</p>
            <p>(x<sup>2</sup>)<sup>3</sup></p>
            <p>This time, we multiple the exponents together</p>
            <p>x<sup>2*3</sup></p>
            <p>x<sup>6</sup></p>
            <p>You could do the reverse as well</p>
        </div>
        <div id="multiple_bases" className="area">
            <h2>Multiple bases</h2>
            <p>Exponents can have multiple bases</p>
            <p>(xy)<sup>2</sup></p>
            <p>We seperate the bases, while keeping the exponent the same, and multiple them</p>
            <p>(xy)<sup>2</sup></p>
            <p>x<sup>2</sup>*y<sup>2</sup></p>
            <p>This works with division as well</p>
            <p>(x/y)<sup>2</sup></p>
            <p>x<sup>2</sup>/y<sup>2</sup></p>
            <p>The reverse is very useful as well.</p>
            <p>w<sup>5</sup>*z<sup>5</sup></p>
            <p>(wz)<sup>5</sup></p>
        </div>
        <div id="negavite_exponents" className="area">
            <h2>Negative exponents</h2>
            <p>Negative exponents can be simplify</p>
            <p>x<sup>-2</sup></p>
            <p>1/x<sup>2</sup></p>
            <p>1/y<sup>-3</sup></p>
            <p>y<sup>3</sup></p>
        </div>
        <div id="fraction_exponents" className="area">
            <h2>Fractional exponents</h2>
            <p>This is another way to write them, are interchangable</p>
            <p><sup>n</sup>√x<sup>m</sup></p>
            <p>x<sup>m/n</sup></p>
            <p>Another example</p>
            <p><sup>o</sup>√y</p>
            <p>y<sup>o</sup></p>
        </div>
      <p></p>
    </div>
  );
}
