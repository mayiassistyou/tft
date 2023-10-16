const ChampionBuilder = () => {
  return (
    <button className="inline-block text-left relative w-[72px] h-[42px] bg-cyan-950 border-l-3 border-l-cyan-900 border-r-3 border-r-cyan-900 cursor-pointer">
      <div
        className="absolute border-t-3 overflow-hidden h-[50px] w-[50px] z-10 border-r-3 border-t-cyan-900 border-r-cyan-900 bg-inherit left-2"
        style={{
          transform: "scaleY(0.6) rotate(-45deg)",
          top: -25,
        }}
      ></div>

      <div
        className="absolute border-l-3 overflow-hidden h-[50px] w-[50px] z-10 border-b-3 border-l-cyan-900 border-b-cyan-900 bg-inherit left-2"
        style={{
          transform: "scaleY(0.6) rotate(-45deg)",
          bottom: -25,
        }}
      ></div>
    </button>
  );
};

export default ChampionBuilder;
