const TopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
    <div
      onClick={scrollToTop}
      className="fixed flex items-center justify-center w-10 h-10 text-white rounded-full cursor-pointer bg-campblue bottom-6 right-4"
    >
      ▲
    </div>
  );
};

export default TopButton;
