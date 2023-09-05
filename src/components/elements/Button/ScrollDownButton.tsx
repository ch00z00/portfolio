export const ScrollDownButton: React.FC = () => {
  const handleScroll = () => {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <button className="group text-center" onClick={handleScroll}>
      <div className="w-8 rounded-full border py-0 text-xl text-yellow-100 duration-500 group-hover:border-yellow-100 group-hover:bg-yellow-100 group-hover:text-black-100">
        ↓
      </div>
    </button>
  );
};
