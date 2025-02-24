import { useEffect } from "react";
import MenuButton from "../Products/MenuButton";
import { MenuItems } from "../Products/MenuItems";
import $ from "jquery";

function ClickMenu2(props) {
    const {name} = props;
    const menuItems = MenuItems.map((item) => Object.keys(item));
    useEffect(() => {
        $(function () {
            $(".menu button").click(function () {
                $(".menu button").removeClass("select");
                $(this).addClass("select");
            });
        });
    }, []);

    return (
        <div className="ClickMenu2">
            {menuItems.map((m1, ind) => (
                <ul className="menu" key={ind}>
                    {m1.map((m2, ind2) => {
                        return <MenuButton name={m2} select={name === m2} key={ind2} />;
                    })}
                </ul>
            ))}
        </div>
    );
}

export default ClickMenu2