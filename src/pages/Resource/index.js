import React from "react";

import {
  PageWrapper,
  PageContent,
} from "../../components/common/styledComponent/wrapper";

import ResourcePreview from "../../components/Card/ResourcePreview";
import { Paragraph } from "../../components/Typography";

function Resource() {
  return (
    <PageWrapper>
      <PageContent justifyContent="flex-start" alignItem="start" gap="20px">
        <ResourcePreview
          title="Internal working of modern browser."
          description="Made detailed flow chart of how modern chrome browser works internally. How rendering happens, when rendering happens, how browser parses HTML, CSS & JavaScript and other... "
          iframe={
            <iframe
              style={{
                border: "none",
                height: "188px",
              }}
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fdw7U1NDOCJ0JcR5zit8oUQ%2FRenderer-process%3Fnode-id%3D0%253A1%26t%3DnsuV4CiQV86GGtna-1"
              allowfullscreen
            ></iframe>
          }
        />
        <ResourcePreview
          url="https://frontendview.hashnode.dev/javascript-scope-and-its-creation"
          title="JavaScript: Scope and its creation"
          description="In Javascript, the usage of scope is as basic as any variable or
					function. We the Javascript developers always use scope in our program
					knowingly or unknowingly. But the question is, do we understand
					SCOPE?! In this blog..."
        />
      </PageContent>
    </PageWrapper>
  );
}

export default Resource;
