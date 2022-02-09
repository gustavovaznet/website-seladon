//STEP COMPONENT
export default function Button({ className, countStep, title, description }) {
  return (
    <div className="mt-28 md:mt-0 relative flex flex-col flex-1 justify-center items-center rounded-2xl bg-gray-50 text-center py-12 px-8">
      <div
        className="flex absolute items-center justify-center bg-white rounded-full w-36 h-36 drop-shadow-xl"
        style={{ top: "-50px" }}
      >
        <p className="text-7xl text-primary font-bold">{countStep}</p>
      </div>
      <h1
        className="mt-16 text-4xl text-primary font-semibold"
        dangerouslySetInnerHTML={{ __html: title }}
      ></h1>
      <p
        className="text-content-dark pt-4 font-medium"
        dangerouslySetInnerHTML={{ __html: description }}
      ></p>
    </div>
  );
}
