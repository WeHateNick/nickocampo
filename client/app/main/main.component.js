import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {

  /*@ngInject*/
  constructor($timeout) {
    this.$timeout = $timeout;
  }

  sidenavItems = [
    {
      name: 'Contact',
      link: '#'
    }, {
      name: 'Resume',
      link: '#'
    }, {
      name: 'Writing',
      link: '#'
    }, {
      name: 'Case Studies',
      link: '#'
    }, {
      name: 'Gallery',
      link: '#'
    }, {
      name: 'Github',
      link: 'https://github.com/WeHateNick/'
    }
  ];

  $onInit() {
    this.$timeout( () => {
      this.init = true;      
    }, 1500);
  }
}

export default angular.module('webApp.main', [uiRouter])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController
  })
  .name;
