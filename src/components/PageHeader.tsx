type Props = {
  title: string;
  description?: string;
  name?: string;
};

export const PageHeader = ({ title, description, name }: Props) => {
  return (
    <div className="flex flex-col items-stretch">
      {title === "Home" ? (
        <>
        {name ? (
          <>
          <h1 className="text-xl font-semibold">Hello {name}</h1>
          <p>Welcome to <span className="text-[#015a4a] font-semibold">NewDawn</span><span className="text-[#dda83a] font-semibold">360</span></p>
          </>
        ): (
          <p>Welcome to <span className="text-[#015a4a] font-semibold">NewDawn</span><span className="text-[#dda83a] font-semibold">360</span></p>
        )}
        </>
      ) : (
        <>
          <h1 className="text-xl font-semibold">{title}</h1>
          <div>{description && <span>{description}</span>}</div>
        </>
      )}
    </div>
  );
};
