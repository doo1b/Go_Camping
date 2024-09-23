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
      className="fixed flex items-center justify-center w-8 h-8 text-xs text-white rounded-full cursor-pointer bg-campblue bottom-6 right-4"
    >
      ▲
    </div>
  );
};

export default TopButton;
