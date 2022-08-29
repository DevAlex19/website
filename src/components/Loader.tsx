import { LoaderContainer, LoaderItem } from "../styles/LoaderStyles";

function Loader() {
  return (
    <LoaderContainer>
      {Array.from(Array(4).keys()).map((item) => (
        <LoaderItem />
      ))}
    </LoaderContainer>
  );
}

export default Loader;
