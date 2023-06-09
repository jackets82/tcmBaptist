import Link from "next/link";

function Marquee() {
  return (
    <div class="relative flex overflow-x-hidden">
      <div class="py-12 animate-marquee whitespace-nowrap">
        <span class="mx-4 text-4xl">
          <Link href="/Subpages/About/Beliefs">First Marquee Item</Link>
        </span>
        <span class="mx-4 text-4xl">Marquee Item 2</span>
        <span class="mx-4 text-4xl">Marquee Item 3</span>
        <span class="mx-4 text-4xl">Marquee Item 4</span>
        <span class="mx-4 text-4xl">Marquee Item 5</span>
      </div>

      <div class="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
        <span class="mx-4 text-4xl">
          <Link href="/Subpages/About/Beliefs">First Marquee Item</Link>
        </span>
        <span class="mx-4 text-4xl">Marquee Item 2</span>
        <span class="mx-4 text-4xl">Marquee Item 3</span>
        <span class="mx-4 text-4xl">Marquee Item 4</span>
        <span class="mx-4 text-4xl">Marquee Item 5</span>
      </div>
    </div>
  );
}

export default Marquee;
