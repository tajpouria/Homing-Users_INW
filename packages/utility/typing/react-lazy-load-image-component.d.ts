/**
 * @license
 * Copyright @tajpouria. All Rights Reserved.
 *
 * Use of this source code is governed by MIT license.
 * http://findpouria.netlify.com
 */

declare module "react-lazy-load-image-component" {
    import React from "react";

    interface IReactLazyLoadImageComponentProps {
        src: string;
        alt?: string;
        effect?: "blur";
        className? = string;
    }

    export const LazyLoadImage: React.FC<IReactLazyLoadImageComponentProps>;
}
