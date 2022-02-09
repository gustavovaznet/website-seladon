//HEADER COMPONENT
export default function SectionHeader({ title, description }) {
  return (
    <>
      <header className="flex px-8 md:px-0">
        <div className="mx-auto py-8 container text-center md:px-80 xl:px-96">
          <span className="flex justify-center text-6xl"></span>
          <h2 className="text-primary font-bold text-5xl mt-6">{title}</h2>
          <p className="text-content-dark mt-6 font-medium">{description}</p>
        </div>
      </header>
    </>
  );
}
