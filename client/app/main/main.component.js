import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {

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

  /*@ngInject*/
  constructor($http) {
    this.$http = $http;
  }

  $onInit() {
    this.$http.get('/api/things')
      .then(response => {
        this.awesomeThings = response.data;
      });
  }
}

export default angular.module('webApp.main', [uiRouter])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController
  })
  .name;
