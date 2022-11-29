import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const _c0 = function () { return { exact: true }; };
export class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 10, vars: 2, consts: [[1, "navbar", "navbar-expand-lg", "bg-light"], [1, "container-fluid"], [1, "collapse", "navbar-collapse"], [1, "nav", "navbar-nav"], ["routerLinkActive", "active", 1, "nav-item", 3, "routerLinkActiveOptions"], ["routerLink", "/", 1, "nav-link"], ["routerLinkActive", "active", 1, "nav-item"], ["routerLink", "/followers", 1, "nav-link"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "ul", 3)(4, "li", 4)(5, "a", 5);
        i0.ɵɵtext(6, " Home ");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(7, "li", 6)(8, "a", 7);
        i0.ɵɵtext(9, " Followers ");
        i0.ɵɵelementEnd()()()()()();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("routerLinkActiveOptions", i0.ɵɵpureFunction0(1, _c0));
    } }, dependencies: [i1.RouterLinkWithHref, i1.RouterLinkActive] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NavbarComponent, [{
        type: Component,
        args: [{ selector: 'app-navbar', template: "<nav class=\"navbar navbar-expand-lg bg-light\">\n    <div class=\"container-fluid\">\n        <div class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav\">\n                <li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\n                    <a class=\"nav-link\" routerLink=\"/\">\n                        Home\n                    </a>\n                </li>\n                <li class=\"nav-item\" routerLinkActive=\"active\">\n                    <a class=\"nav-link\" routerLink=\"/followers\">\n                        Followers\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>" }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=navbar.component.js.map