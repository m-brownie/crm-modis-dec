'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">crm-modis-dec documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="todo.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>TODO
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-3402fa7bada53d8fc304e6630fbe927e"' : 'data-target="#xs-components-links-module-AppModule-3402fa7bada53d8fc304e6630fbe927e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-3402fa7bada53d8fc304e6630fbe927e"' :
                                            'id="xs-components-links-module-AppModule-3402fa7bada53d8fc304e6630fbe927e"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ClientsModule.html" data-type="entity-link">ClientsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ClientsModule-ea2d5c0f62ea7a06c2f2a98e976a891d"' : 'data-target="#xs-components-links-module-ClientsModule-ea2d5c0f62ea7a06c2f2a98e976a891d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ClientsModule-ea2d5c0f62ea7a06c2f2a98e976a891d"' :
                                            'id="xs-components-links-module-ClientsModule-ea2d5c0f62ea7a06c2f2a98e976a891d"' }>
                                            <li class="link">
                                                <a href="components/PageAddClientComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageAddClientComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageEditClientComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageEditClientComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageListClientsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageListClientsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ClientsRoutingModule.html" data-type="entity-link">ClientsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CoreModule-391bdc5a8f0aed3725c00e1af3e6a2fb"' : 'data-target="#xs-components-links-module-CoreModule-391bdc5a8f0aed3725c00e1af3e6a2fb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-391bdc5a8f0aed3725c00e1af3e6a2fb"' :
                                            'id="xs-components-links-module-CoreModule-391bdc5a8f0aed3725c00e1af3e6a2fb"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/IconsModule.html" data-type="entity-link">IconsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-IconsModule-8cb8ee53b9f5f0491d982c6d58954c3b"' : 'data-target="#xs-components-links-module-IconsModule-8cb8ee53b9f5f0491d982c6d58954c3b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-IconsModule-8cb8ee53b9f5f0491d982c6d58954c3b"' :
                                            'id="xs-components-links-module-IconsModule-8cb8ee53b9f5f0491d982c6d58954c3b"' }>
                                            <li class="link">
                                                <a href="components/IconCloseComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IconCloseComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IconDeleteComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IconDeleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IconEditComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IconEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IconNavComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IconNavComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginModule.html" data-type="entity-link">LoginModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginModule-1899f1900448f7a0cfef9db4fa8eaf4d"' : 'data-target="#xs-components-links-module-LoginModule-1899f1900448f7a0cfef9db4fa8eaf4d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginModule-1899f1900448f7a0cfef9db4fa8eaf4d"' :
                                            'id="xs-components-links-module-LoginModule-1899f1900448f7a0cfef9db4fa8eaf4d"' }>
                                            <li class="link">
                                                <a href="components/PageSignInComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageSignInComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginRoutingModule.html" data-type="entity-link">LoginRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/OrdersModule.html" data-type="entity-link">OrdersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-OrdersModule-904614ccf79f49678b720d702f0983e3"' : 'data-target="#xs-components-links-module-OrdersModule-904614ccf79f49678b720d702f0983e3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OrdersModule-904614ccf79f49678b720d702f0983e3"' :
                                            'id="xs-components-links-module-OrdersModule-904614ccf79f49678b720d702f0983e3"' }>
                                            <li class="link">
                                                <a href="components/PageAddOrderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageAddOrderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageEditOrderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageEditOrderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageListOrdersComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageListOrdersComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrdersRoutingModule.html" data-type="entity-link">OrdersRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PageNotFoundModule.html" data-type="entity-link">PageNotFoundModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PageNotFoundModule-80b9d627ca29058bdda1a9d5ca9e2c3d"' : 'data-target="#xs-components-links-module-PageNotFoundModule-80b9d627ca29058bdda1a9d5ca9e2c3d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PageNotFoundModule-80b9d627ca29058bdda1a9d5ca9e2c3d"' :
                                            'id="xs-components-links-module-PageNotFoundModule-80b9d627ca29058bdda1a9d5ca9e2c3d"' }>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageNotFoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PageNotFoundRoutingModule.html" data-type="entity-link">PageNotFoundRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TextsModule.html" data-type="entity-link">TextsModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UiModule.html" data-type="entity-link">UiModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UiModule-fff49e07b5e86d9f7c0f16c55f40c65d"' : 'data-target="#xs-components-links-module-UiModule-fff49e07b5e86d9f7c0f16c55f40c65d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UiModule-fff49e07b5e86d9f7c0f16c55f40c65d"' :
                                            'id="xs-components-links-module-UiModule-fff49e07b5e86d9f7c0f16c55f40c65d"' }>
                                            <li class="link">
                                                <a href="components/Ui2Component.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Ui2Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UiComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UiComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/Order.html" data-type="entity-link">Order</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/OrdersService.html" data-type="entity-link">OrdersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/OrderI.html" data-type="entity-link">OrderI</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});