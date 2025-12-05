export default function HypothesisTesting() {
return (
    <div className="grid items-center justify-items-center min-h-screen">
        <p>We have 2 claims, H<sub>0</sub> and H<sub>1</sub></p>
        <p>H<sub>0</sub> and H<sub>1</sub> are both opposite claims and both can not be accepted or regretted as truth.</p>
        <p>If we test H<sub>0</sub></p>
        <p>Test find H<sub>0</sub> is wrong, that also means we support/fail to reject H<sub>1</sub></p>
        <p>Test find H<sub>0</sub> and fail to reject it, mean we are also rejecting H<sub>1</sub></p>
        <br/>
        <p>Examples</p>
        <p>μ &lt; 3</p>
        <p>H<sub>0</sub> is μ &lt; 3</p>
        <p>H<sub>1</sub> is μ = 3</p>
        <br/>
        <p>μ = 7</p>
        <p>H<sub>0</sub> is μ = 7</p>
        <p>H<sub>1</sub> is μ != 7</p>
        <br/>
        <p>To test the probability, yes we can test this, we use 1 of 3 formulas</p>
        <p>With the mean, if you have σ use z:(x̄-μ)/(σ/sqrt(n))</p>
        <p>With the mean, if you have s use t:(x̄-μ)/(s/sqrt(n))</p>
        <p>To use proportion, use z:(p̂-p)/sqrt(p*q/n)</p>
    </div>
);
}
