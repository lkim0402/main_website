export function Footer() {
  return (
    <div className="microsoftFont mx-10 mt-7 mb-12">
      <p className="mb-2 text-center text-wrap text-[#E5E4FF]">
        Built with React, NextJS, Tailwind CSS, MDX.
      </p>
      <p className="mb-2 text-center text-sm text-indigo-300">
        Copyright © {new Date().getFullYear()} LeejunKim
      </p>
    </div>
  );
}
