import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {

  /*@ngInject*/
  constructor ($timeout) {
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

  itemDetails = {
    coding: [
      'ES6',
      'AngularJS',
      'React',
      'HTML/CSS'
    ],
    design: [
      'Sketch',
      'Flinto',
      'MarvelApp',
      'Material Design'
    ],
    strategy: [
      'Usability testing',
      'Product management',
      'Behavioral anlytics',
      'SEO and SEM'
    ]
  };

  setDetails (item) {
    this.details = this.itemDetails[item];
  }

  $onInit () {
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
