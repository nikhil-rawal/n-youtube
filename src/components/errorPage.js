import { Link, useRouteError } from "react-router-dom";
import ImageComp from "../utils/ImageComp";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col text-center justify-center align-middle">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error?.statusText || error?.message}</i>
      </p>
      <br />
      <Link to="/">
        <ImageComp
          classNameSource={`h-8 mx-5 cursor-pointer`}
          altSource={"youtube-logo"}
          srcSource={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGJrpSqrv7Va8wkAJCoRTsHWDJyXJEe_ypDw&s"
          }
        />
      </Link>
    </div>
  );
}
