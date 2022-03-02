import { NavLink } from "react-router-dom";

import { CardRenderer } from "./CardRenderer";
import { GridItem } from "../styled/Grid.styled";
import { createToLink, getPathname } from "../../helpers/urls";

export const ReusableGrid = ({ type, items, ...other }) => (
    items?.map((item, index) => (
        <GridItem item key={index} component={NavLink} to={`${createToLink(getPathname(type), item?.id)}`} {...other}>
            <CardRenderer type={type} item={item} />
        </GridItem>
    ))
);