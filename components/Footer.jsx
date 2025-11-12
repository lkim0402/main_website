export function Footer() {
  return (
    <div className="mb-12 mt-25 mx-10 microsoftFont">
      <p className="text-center mb-2 text-wrap text-gray-700 dark:text-[#E5E4FF] ">
        Built with React, NextJS, Tailwind CSS, MDX.
      </p>
      <p className="text-center mb-2 text-sm text-gray-500 dark:text-indigo-300">
        Copyright © {new Date().getFullYear()} LeejunKim
      </p>
      <div className="flex flex-row items-center justify-center gap-2">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:lkim0402@uw.edu?subject=Contact&amp;body=Hello%20there!"
          aria-label="Email"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            className="transition-all duration-300 fill-gray-700 hover:fill-gray-400 dark:fill-indigo-300 dark:hover:fill-indigo-200 hover:scale-110 "
          >
            <path
              fillRule="evenodd"
              d="M2.544 5.168C3.047 4.469 3.865 4 4.8 4h14.4c.936 0 1.753.469 2.256 1.168.344.478.544 1.067.544 1.699v10.267C22 18.682 20.78 20 19.2 20H4.8C3.22 20 2 18.682 2 17.133V6.867c0-.632.201-1.221.544-1.699zM4.933 6l6.327 6.965a1 1 0 0 0 1.48 0L19.067 6H4.933zM20 7.948l-5.78 6.362a3 3 0 0 1-4.441 0L4 7.948v9.186c0 .513.392.867.8.867h14.4c.408 0 .8-.353.8-.867V7.948z"
            ></path>
          </svg>
        </a>{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/lkim0402"
          aria-label="GitHub"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="-6 0 32 32"
            className="transition-all duration-300 fill-gray-700 hover:fill-gray-400 dark:fill-indigo-300 dark:hover:fill-indigo-200 hover:scale-110 "
          >
            <path d="M18.36 9.28c.48-1.72-.24-3.6-.28-3.72-.12-.28-.4-.52-.72-.52-.08 0-1.92-.16-3.76 1.24a24.28 24.28 0 0 0-3.16-.36h-.08a24.28 24.28 0 0 0-3.16.36c-1.84-1.4-3.68-1.24-3.76-1.24-.32.04-.6.24-.72.52-.04.08-.8 2-.28 3.72-.92 1.28-1.64 2.96-1 5.96.6 2.72 2.84 4.24 5.16 4.76-.2.56-.28 1.24-.36 1.96-.96.04-1.56-.52-2.4-1.4-.72-.76-1.52-1.64-2.84-1.92-.44-.12-.88.16-1 .64-.08.48.2.92.68 1 .76.16 1.28.72 1.92 1.4.84.88 1.8 1.96 3.52 1.96h.04l.12 2.52c.04.48.44.8.92.76s.8-.44.76-.92c-.24-2.72-.04-5.6.4-6 .32-.2.52-.56.4-.96-.08-.36-.4-.64-.8-.64-.36 0-4.12-.2-4.84-3.52-.6-2.72.16-3.92.96-4.88.2-.24.24-.6.12-.92-.32-.68-.2-1.64-.04-2.28.56.08 1.4.32 2.28 1.08.2.2.48.24.76.2 1.24-.32 2.92-.4 3.2-.4.24 0 1.96.08 3.2.4a.76.76 0 0 0 .76-.2c.88-.76 1.76-1 2.28-1.08.16.6.28 1.56-.04 2.28-.12.28-.08.64.12.92.8.96 1.52 2.16.96 4.88-.72 3.32-4.48 3.52-4.92 3.56-.4 0-.72.28-.8.64a.92.92 0 0 0 .4.96c.48.4.68 3.24.44 6-.04.48.32.88.76.92h.08a.83.83 0 0 0 .84-.76c.16-1.76.28-4.48-.28-6.2 2.32-.48 4.56-2.04 5.16-4.76.64-3-.04-4.68-1-5.96z"></path>
          </svg>
        </a>{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/leejunkim/"
          aria-label="LinkedIn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 1920 1920"
            className="transition-all duration-300 fill-gray-700 hover:fill-gray-400 dark:fill-indigo-300 dark:hover:fill-indigo-200 hover:scale-110 "
          >
            <path
              d="M1168 601.321v74.955c72.312-44.925 155.796-71.11 282.643-71.11 412.852 0 465.705 308.588 465.705 577.417v733.213L1438.991 1920v-701.261c0-117.718-42.162-140.06-120.12-140.06-74.114 0-120.12 23.423-120.12 140.06V1920l-483.604-4.204V601.32H1168zm-687.52-.792v1318.918H0V600.53h480.48zm-120.12 120.12H120.12v1078.678h240.24V720.65zm687.52.792H835.267v1075.316l243.364 2.162v-580.18c0-226.427 150.51-260.18 240.24-260.18 109.55 0 240.24 45.165 240.24 260.18v580.18l237.117-2.162v-614.174c0-333.334-93.573-457.298-345.585-457.298-151.472 0-217.057 44.925-281.322 98.98l-16.696 14.173H1047.88V721.441zM240.24 0c132.493 0 240.24 107.748 240.24 240.24S372.733 480.48 240.24 480.48 0 372.733 0 240.24 107.748 0 240.24 0zm0 120.12c-66.186 0-120.12 53.934-120.12 120.12s53.934 120.12 120.12 120.12 120.12-53.934 120.12-120.12-53.934-120.12-120.12-120.12z"
              fillRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
}
