import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {

  /*@ngInject*/
  constructor ($timeout, $mdSidenav) {
    this.$timeout = $timeout;
    this.$mdSidenav = $mdSidenav;
  }

  toggleMenu () {
    this.$mdSidenav('left').toggle()
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
    ],
    startups: [
      'MortarStone',
      'BetaFish',
      'Quaffer'
    ],
    agencies: [
      'KPS3'
    ],
    enterprises: [
      'Cisco',
      'Hewlett Packard Enterprises'
    ]
  };

  setDetails (item) {
    if (this.itemDetails[item]) {
      this.details = this.itemDetails[item];      
    } else {
      console.error(`setDeatils error. "${item}" is not a valid item detail.`);
    }
  }

  $onInit () {
    this.$timeout( () => {
      this.init = true;      
    }, 1500);
    this.itemDetails[0];
  }
}

export default angular.module('webApp.main', [uiRouter])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController
  })
  .name;
