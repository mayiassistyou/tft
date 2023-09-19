export default function Footer(): JSX.Element {
  return (
    <div
      className="text-center bg-cyan-950 border-t border-cyan-900 py-4
     text-white"
    >
      <p>
        TFT isn&apos;t endorsed by Riot Games and doesn&apos;t reflect the views
        or opinions of Riot Games or anyone officially involved in producing or
        managing League of Legends.
      </p>
      <p>
        League of Legends and Riot Games are trademarks or registered trademarks
        of Riot Games, Inc. League of Legends © Riot Games, Inc.
      </p>
      <p className="mt-2 text-gray-400">&copy; TFT 2023</p>
    </div>
  );
}
