const technologies = {
  "HTML": "#B04759",
  "CSS": "#F99B7D",
  "JAVASCRIPT": "#F3E99F",
  "REACT": "#6ae2fa",
  "STYLEDCOMPONENTS": "#dd6f93",
  "SUPABASE": "#37996b",
  "NETCORE": "#8d69b3",
  "NEXTJS": "#555861",
  "TAILWIND": "#68aaac"

};

export default function Tag({ technology }) {
  const backgroundColor = technologies[technology.replace(/ /g, "").toUpperCase()];

  return <div
    className="inline-block px-3 py-0.5 text-sm uppercase rounded-[100px] font-semibold"
    style={{ backgroundColor: backgroundColor }}
  >{technology}</div>;
}