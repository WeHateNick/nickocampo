'use strict';

import angular from 'angular';
import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';
import ngMaterial from 'angular-material';

import uiRouter from 'angular-ui-router';

import {
  routeConfig
} from './app.config';

import navbar from '../components/navbar/navbar.component';
import linkButton from '../components/link-button/link-button.component';
import footer from '../components/footer/footer.component';
import main from './main/main.component';
import constants from './app.constants';
import util from '../components/util/util.module';

import './app.scss';

angular.module('webApp', [ngCookies, ngResource, ngSanitize, uiRouter, ngMaterial, navbar, linkButton, footer, main,
  constants, util
])
  .config(routeConfig);

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['webApp'], {
      strictDi: true
    });
  });
