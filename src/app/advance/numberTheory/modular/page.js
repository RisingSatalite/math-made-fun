export default function Modular() {
  return (
    <div className="grid items-center justify-items-center min-h-screen px-4 py-8 gap-4">
      <h1 className="text-3xl font-semibold">Modular Arithmetic</h1>

      <p>
        Modular arithmetic is arithmetic with a fixed modulus. When you divide one
        number by another, the remainder is what matters in modular math.
      </p>

      <p>
        A common notation is <span className="font-mono">a ≡ b (mod n)</span>, read as
        “<span className="font-mono">a</span> is congruent to <span className="font-mono">b</span>
        modulo <span className="font-mono">n</span>”. It means that when you divide
        <span className="font-mono">a</span> by <span className="font-mono">n</span>, the remainder is the same as
        when you divide <span className="font-mono">b</span> by <span className="font-mono">n</span>.
      </p>

      <h2 className="text-2xl font-semibold">How to get the remainder</h2>
      <p>
        If you divide <span className="font-mono">a</span> by <span className="font-mono">n</span>, the remainder is
        <span className="font-mono">a % n</span> (in most programming languages).
      </p>

      <p>
        Example: <span className="font-mono">17 ÷ 5</span> gives a quotient of 3 and a remainder of
        <span className="font-mono"> 2</span>. So:
      </p>
      <p className="font-mono">17 - 5 = 12</p>
      <p className="font-mono">12 - 5 = 7</p>
      <p className="font-mono">7 - 5 = 2</p>
      <p className="font-mono">2 - 5 = -3</p>
      <p className="font-mono">We do not want negative numbers, so we go with the smallest, positive number instead which is 2</p>
      <p className="font-mono">17 ≡ 2 (mod 5)</p>

      <p>
        Another way to think about this is that 17 and 2 differ by a multiple of 5:
      </p>
      <p className="font-mono">17 − 2 = 15</p>
      <p className="font-mono">15 = 3 × 5</p>

      <p>We do not like negative number so always change it to the smallest positive, it is completely functional the same</p>
      <p className="font-mono">-17 (mod 3)</p>
      <p>We can add a multiple of modular number</p>
      <p className="font-mono">18 = 3 × 6</p>
      <p className="font-mono">-17 + 18 (mod 3)</p>
      <p className="font-mono">1 (mod 3)</p>
      <p className="font-mono">-17 (mod 3) = 1 (mod 3)</p>

      <h2 className="text-2xl font-semibold">Modular arithmetic operations</h2>
      <p>
        Modular arithmetic behaves like normal arithmetic, except we reduce the result
        by the modulus after each operation.
      </p>

      <p className="font-mono">(a + b) mod n = ( (a mod n) + (b mod n) ) mod n</p>
      <p className="font-mono">(a × b) mod n = ( (a mod n) × (b mod n) ) mod n</p>

      <p>
        Example: Compute <span className="font-mono">(8 + 11) mod 5</span>.
      </p>
      <p className="font-mono">8 mod 5 = 3</p>
      <p className="font-mono">11 mod 5 = 1</p>
      <p className="font-mono">(3 + 1) mod 5 = 4</p>
      <p>So: (8 + 11) mod 5 = 4</p>

      <p>
        Example: Compute <span className="font-mono">(6 × 7) mod 5</span>.
      </p>
      <p className="font-mono">6 mod 5 = 1</p>
      <p className="font-mono">7 mod 5 = 2</p>
      <p className="font-mono">(1 × 2) mod 5 = 2</p>
      <p>So: (6 × 7) mod 5 = 2</p>

      <h2 className="text-2xl font-semibold">Why it is useful</h2>
      <p>
        Modular arithmetic is used in clocks (hours wrap around), cryptography (RSA),
        hashing, and many algorithms that only care about remainders.
      </p>

      <p>
        A quick rule: if two numbers are congruent mod <span className="font-mono">n</span>, you can
        replace one with the other in any modular calculation.
      </p>

      <p className="italic">Try picking a modulus and computing a few remainders to see how numbers wrap around.</p>
    </div>
  );
}
