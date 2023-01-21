import { BookPanel, DvdPanel, FurniturePanel } from "@/view/component/panels";
import { useContext } from "react";
import { productContext } from "@/context/context";

const ENUM_PRODUCT_TYPE = {
    dvd: <DvdPanel />,
    book: <BookPanel />,
    furniture: <FurniturePanel />,
};

export const SwitcherTypePanel = () => {
    const { type } = useContext(productContext);
    return <div className="switcher-type">{ENUM_PRODUCT_TYPE[type]}</div>;
};
