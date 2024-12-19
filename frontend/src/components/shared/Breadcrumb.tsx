import { Link } from "react-router-dom";

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
            <Link
              to={item.route!}
              className={`${item.route ? null : "disabled"} `}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumb;
