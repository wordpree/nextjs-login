import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useFileContext } from "../utils/context";

const ImgUI = () => {
  const [state] = useFileContext();
  const { images } = state;
  if (!state.images) {
    return null;
  }
  const fakeDes = [...Array(images.length)].map(
    (a) => "This is a preset description. It can be done via an input field"
  );
  return (
    <div className="images-entry">
      {images.map((i, index) => {
        const url = URL.createObjectURL(i);
        return (
          <Link href={{ pathname: `/file/${i.name}`, query: url }} key={url}>
            <a className="image-wrapper">
              <Image src={url} alt="upload image" height="180" width="320" />
              <h4 className="des">{fakeDes[index]}</h4>
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default ImgUI;
