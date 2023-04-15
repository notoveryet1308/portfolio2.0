import React from "react";
import {
  ResourcePreviewWrapper,
  ResourceCover,
  ResourceDetail,
  ResourceTitle,
  ResourceDes,
} from "./style";
import scopeCover from "../../../assets/article-ss/scope-cover.png";

function ResourcePreview({ url, cover, title, description, iframe }) {
  return (
    <ResourcePreviewWrapper href={url} target="_blank">
      {!iframe ? (
        <ResourceCover>
          <img src={scopeCover} alt="article cover" />
        </ResourceCover>
      ) : (
        iframe
      )}
      <ResourceDetail>
        <ResourceTitle>{title}</ResourceTitle>
        <ResourceDes>{description}</ResourceDes>
      </ResourceDetail>
    </ResourcePreviewWrapper>
  );
}

export default ResourcePreview;
