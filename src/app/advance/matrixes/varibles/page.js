import MatrixDisplayer from "@/components/matrixDisplayer";

export default function MatrixVarible() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <p>Example 1</p>
      <div>
        <MatrixDisplayer matrix={[[1,"a",3],[2,4,6]]}/>
        <p>That right, there are varibles with matrixes now</p>
        <p>To simplify, we can not divid by 'a' beacuse might be 0 making the action invalid</p>
        <p>R2-2R1</p>
        <MatrixDisplayer matrix={[[1,"a",3],[0,"4-2a",0]]}/>
        <p>This is best we can do as anything else involves dividing by 'a'</p>
        <p>We can use the Rank rules to determine solution options</p>
        <p>If a is equal to 2, then a=2 and 4-2a = 4-2(2) = 0, that might the matrix can become</p>
        <MatrixDisplayer matrix={[[1,2,3],[0,0,0]]}/>
        <p>Beacuse that is the case, we have 2 varible, and a Rank 1, with varibles, meaning infinite solutions</p>
        <p>Alternatively, if a != 2</p>
        <MatrixDisplayer matrix={[[1,'c',3],[0,'4-2c',0]]}/>
        <p>We can do not know what c is, but we know, it will not be 0, we can substiate '4-2c' for 'd'</p>
        <MatrixDisplayer matrix={[[1,'c',3],[0,'d',0]]}/>
        <p>We can turn 'd' into 1 beacuse 'd' is not zero.</p>
        <MatrixDisplayer matrix={[[1,'c',3],[0,1,0]]}/>
        <p>We can row reduce 'c' now, with 1 now</p>
        <MatrixDisplayer matrix={[[1,0,3],[0,1,0]]}/>
        <p>In the case 'a' != 2, then we have a Rank C of 2, Rank A of 2, and 2 varibles, mean we have a unique solution thanks to the Rank rules</p>
        <p>a=2 then infinite solution</p>
        <p>a!=2 then unique solution</p>
      </div>
    </div>
  );
}