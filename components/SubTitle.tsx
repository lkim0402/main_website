interface subTitleFormat {
  title: string;
}

export default function Subtitle({ title }: subTitleFormat) {
  return (
    <div className="mb-2 text-center sm:text-justify ">
      <div
        className="
          text-xl font-bold 
        dark:text-indigo-200 microsoftFont"
      >
        {title}
      </div>
    </div>
  );
}
