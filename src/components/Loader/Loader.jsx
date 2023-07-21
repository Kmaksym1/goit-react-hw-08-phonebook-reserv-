import { Oval } from "react-loader-spinner";

export const Loader = ({ color, height = 180, width = 180, className }) => {
  return (
    <div className={className}>
      <Oval
        height={height}
        width={width}
        color={color}
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor={color}
        strokeWidth={5}
        strokeWidthSecondary={5}
      />
    </div>
  );
};
