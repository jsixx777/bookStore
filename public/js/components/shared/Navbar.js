var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
var Example = /** @class */ (function (_super) {
    __extends(Example, _super);
    function Example(props) {
        var _this = _super.call(this, props) || this;
        _this.toggle = _this.toggle.bind(_this);
        _this.state = {
            isOpen: false
        };
        return _this;
    }
    Example.prototype.toggle = function () {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };
    Example.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(Navbar, { color: "light", light: true, expand: "md" },
                React.createElement(NavbarBrand, { href: "/" }, "reactstrap"),
                React.createElement(NavbarToggler, { onClick: this.toggle }),
                React.createElement(Collapse, { isOpen: this.state.isOpen, navbar: true },
                    React.createElement(Nav, { className: "ml-auto", navbar: true },
                        React.createElement(NavItem, null,
                            React.createElement(NavLink, { href: "/components/" }, "Components")),
                        React.createElement(NavItem, null,
                            React.createElement(NavLink, { href: "https://github.com/reactstrap/reactstrap" }, "GitHub")),
                        React.createElement(UncontrolledDropdown, { nav: true, inNavbar: true },
                            React.createElement(DropdownToggle, { nav: true, caret: true }, "Options"),
                            React.createElement(DropdownMenu, { right: true },
                                React.createElement(DropdownItem, null, "Option 1"),
                                React.createElement(DropdownItem, null, "Option 2"),
                                React.createElement(DropdownItem, { divider: true }),
                                React.createElement(DropdownItem, null, "Reset"))))))));
    };
    return Example;
}(React.Component));
export default Example;
;
;
