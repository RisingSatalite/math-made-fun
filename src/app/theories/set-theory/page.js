export default async function SetTheory() {

  return (
    <div>
      <h1>Set Theory</h1>
      <div>
        <p>Set theory is a branch of mathematics that studies sets, which are collections of distinct objects. Sets are fundamental objects in mathematics and are used to define numbers, functions, and other mathematical concepts. Common operations on sets include union, intersection, and difference.</p>
        <p>Our defiation of sets has chagned overtime thanks to contradiction, such as Rusell Paradox</p>
        <p>Rusell&apos;s Paradox goes as follows</p>
        <p>According to the unrestricted comprehension principle, for any sufficiently well-defined property, there is the set of all and only the objects that have that property</p>
        <p>This means that any set be define as long as we candefine a property for what is included and what is excluded, and then the set will only include all item and only those item if they have that property, including themselves</p>
        <p>We can create a set R that contains all sets that do not contain themselves</p>
        <p>Sometime refered to as Russel set</p>
        <p>Because R is also a set, we can add it to itself.</p>
        <br/>
        <p>The set of R now contains itself, being it is ineligable to be in the set of R, so we must remove it</p>
        <br/>
        <p>The set of R does not contain it self, meaning it is eligable to added to the set of R</p>
        <br/>
        <p>As you can see, when R contains R, we must remove R from the set</p>
        <p>But when R is not in the set, we must add R to the set</p>
        <p>This causes a paradox, with no solution</p>
      </div>
    </div>
  );
}
