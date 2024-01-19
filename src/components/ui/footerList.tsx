interface Props {
  title: string;
  list: string[];
}

const FooterList: React.FC<Props> = ({ title, list }) => {
  return (
    <div>
      <p className="text-lg font-bold">{title}</p>

      {list.map((item, index) => (
        <div className="my-5 font-medium text-xs opacity-90" key={index}>{item}</div>
      ))}
    </div>
  );
};

export default FooterList;
