'use strict';
/* eslint no-sync: 0 */

import angular from 'angular';

export default angular.module('directives.linkButton', [])
  .component('linkButton', {
    template: `
      <md-button class="link-button md-raised" layout="row" md-ink-ripple="#FFF000" href="{{href}}" target="_blank">
        <span class="link-button__label" flex="90">
          <ng-transclude></ng-transclude>
        </span>
        <span class="link-button__icon" flex="10">
          <i class="fa fa-external-link"></i>
        </span>
        <md-tooltip>{{$ctrl.tooltip}}</md-tooltip>
      </md-button>
    `,
    transclude: true,
    bindings: {
      href: '@',
      tooltip: '@'
    }
  })
  .name;
