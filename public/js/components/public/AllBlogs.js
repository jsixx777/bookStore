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
var AllBlogs = /** @class */ (function (_super) {
    __extends(AllBlogs, _super);
    function AllBlogs(props) {
        return _super.call(this, props) || this;
        //this.state = { :  };
    }
    AllBlogs.prototype.render = function () {
        return (React.createElement("h1", { className: "text-center" }, "All Blogs"));
    };
    return AllBlogs;
}(React.Component));
export default AllBlogs;
