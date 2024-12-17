type Crumb = {
  items: {
    title: string;
    route?: string;
  }[];
};

const Breadcrumb = (props: Crumb) => {
  return (
    <div className="breadcrumbs text-sm text-primary font-semibold">
      <ul>
        {props.items.map((item, index) => (
          <li key={index}>
            <a
              className={`${item.route ? null : "disabled"} `}
              href={item.route}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumb;
