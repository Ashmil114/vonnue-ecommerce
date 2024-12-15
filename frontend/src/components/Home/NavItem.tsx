import { IconType } from "react-icons";

type NavItem = {
  icon: IconType;
  label: string;
  indicator?: boolean;
  indicatorCount?: number;
  extra?: string;
  action?: () => void;
};

const NavItem = (props: NavItem) => {
  return (
    <div className="">
      <div
        className="btn btn-ghost btn-circle hover:bg-primary-bg w-full px-4 "
        onClick={props.action}
      >
        {props.indicator ? (
          // with Indicator
          <div className="flex w-auto items-end gap-2">
            <div className="indicator">
              <props.icon
                className={`h-7 w-7 ${
                  props.extra ? props.extra : "text-secondary"
                }`}
              />
              {props.indicatorCount
                ? props.indicatorCount > 0 && (
                    <span className="badge badge-sm indicator-item bg-primary text-white p-[10px]">
                      {props.indicatorCount}
                    </span>
                  )
                : ""}
            </div>
            <span
              className={`pb-[1px] text-[16px] max-sm:hidden ${
                props.extra ? props.extra : "text-secondary"
              }`}
            >
              {props.label}
            </span>
          </div>
        ) : (
          // without Indicator
          <div className="flex w-auto items-end gap-2">
            <props.icon
              className={`h-7 w-7  ${
                props.extra ? props.extra : "text-secondary"
              }`}
            />
            <span
              className={`pb-[1px]  text-[16px] max-sm:hidden ${
                props.extra ? props.extra : "text-secondary"
              }`}
            >
              {props.label}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavItem;
