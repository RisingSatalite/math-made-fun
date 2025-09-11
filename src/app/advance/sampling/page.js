export default function Sampling() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h2>Simple random sample</h2>
        <p>Assigning numbers, and choosing a rnadom element, by pulling numbers</p>
        <h2>Stratified random</h2>
        <p>Divid the whole in groups, pick a random sample from every group</p>
        <h2>Cluster random sampling</h2>
        <p>Divid whole in groups, pick a random group to sample, also bad but cluster can be simular, never take if groups are divided into categories</p>
        <h2>Systematic sample</h2>
        <p>Go thought a list and pick every k elements, randomise list and then pick randomly</p>
        <p>Population is represted by N</p>
        <p>Sample size is represted by n</p>
        <p>K = N/n</p>
        <h2>Convenience sample</h2>
        <p>Picking the most convenience or easiest elements, not good, not random. This includes asking people to participate, review or choosing a group in a certain location</p>
        <p>Review are people choosing to leave reviews, typcially only when, very good experience or very bad experience</p>
        <p>Because it may be the only pracical sampling method, best to take various sample, such as at different time and repeat, which make it more reliable</p>
        <h2>Multip step sample</h2>
        <p>Use multiple sampling stragies</p>
    </div>
  );
}
