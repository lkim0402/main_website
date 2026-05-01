export default function Section({ title }) {
  return (
    <div>
      <p className="microsoftFont transform text-left text-2xl font-bold text-indigo-400 transition-all duration-300 hover:scale-101 hover:text-[#999ffc] dark:text-indigo-200 dark:hover:text-indigo-100">
        {title}
      </p>
    </div>
  );
}
