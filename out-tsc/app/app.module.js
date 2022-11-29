import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import * as i0 from "@angular/core";
export class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AppModule, bootstrap: [AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [BrowserModule,
        AppRoutingModule,
        HttpClientModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    AppComponent,
                    AboutComponent,
                    GithubFollowersComponent,
                    HomeComponent,
                    NavbarComponent
                ],
                imports: [
                    BrowserModule,
                    AppRoutingModule,
                    HttpClientModule
                ],
                providers: [],
                bootstrap: [AppComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppModule, { declarations: [AppComponent,
        AboutComponent,
        GithubFollowersComponent,
        HomeComponent,
        NavbarComponent], imports: [BrowserModule,
        AppRoutingModule,
        HttpClientModule] }); })();
//# sourceMappingURL=app.module.js.map