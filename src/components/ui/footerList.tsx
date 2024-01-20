interface Props {
  title: string;
  list: string[];
}

const FooterList: React.FC<Props> = ({ title, list }) => {
  return (
    <div>
      <p className="text-lg font-bold">{title}</p>

      {list.map((item, index) => (
        <div
          className="my-5 cursor-pointer text-xs font-medium opacity-90 hover:underline"
          key={index}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default FooterList;
