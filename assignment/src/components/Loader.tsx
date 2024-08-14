import { Oval } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="loader absolute top-1/2 left-1/2 ">
      <Oval
        height={80}
        width={80}
        color="#4fa94d"
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4fa94d"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};

export default Loader;
