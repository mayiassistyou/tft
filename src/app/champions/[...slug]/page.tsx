type Props = {
  params: { slug: string };
};

export default function ChampionDetail({ params }: Props): JSX.Element {
  return <div>{params.slug}</div>;
}
