export default function __Default__() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <p>With a graph, the 50 percent is also the median of the data</p>
      <p>We can take it farther and get the 25 and 75, which would also be call Q1 and Q3</p>
      <p>But that is not enough, we can also get 87%, so one 1 side it 87% and seperates it from remaining 13%</p>
      <p>The formula is Lp=(n+1)p/100</p>
      <p>P is the percentile you want, and number is the number of elements</p>
      <p>You will get a number, and by checking which number in your dataset it corrsponds with, or is most closely, will be the percentile medium</p>
      <p>IQR detect is extreme, but subtract Q3 and Q1</p>
      <p>Using Q3+1.5*(IQR) for the maxium</p>
      <p>Using Q1-1.5*(IQR) for the minium</p>
      <p>It provide a critaries for what is the limit for extreme values and what is not</p>
    </div>
  );
}
