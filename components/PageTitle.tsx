interface pageTitleFormat {
  title: string;
  description?: string;
}

export default function PageTitle({ title, description }: pageTitleFormat) {
  return (
    <div className="mb-5 text-center sm:text-justify">
      <div className="microsoftFont pb-2 text-3xl font-bold text-indigo-200">
        {title}
      </div>
      {description && <p className="text-indigo-100">{description}</p>}
    </div>
  );
}
