const underlineStyle =
  "hover:underline hover:underline-offset-7 hover:decoration-2 hover:decoration-yellow-300 hover:font-bold";

export default function Header() {
  return (
    <header className="flex justify-between px-[18.75rem] pt-10 sticky top-0 bg-[#686868] z-10">
      <h1 className="text-5xl font-bold">
        <a href="#">KJS&apos;s Portfolio</a>
      </h1>
      <nav>
        <ul className="flex gap-6">
          <li className={`${underlineStyle}`}>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#contact" className={`${underlineStyle}`}>
              Contact
            </a>
          </li>
          <li>
            <a href="#archive" className={`${underlineStyle}`}>
              Archive
            </a>
          </li>
          <li>
            <a href="#education" className={`${underlineStyle}`}>
              Education
            </a>
          </li>
          <li>
            <a href="#skills" className={`${underlineStyle}`}>
              Skills
            </a>
          </li>
          <li>
            <a href="#portfolio" className={`${underlineStyle}`}>
              Portfolio
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
