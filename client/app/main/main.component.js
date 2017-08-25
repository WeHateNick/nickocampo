import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {

  /*@ngInject*/
  constructor ($timeout, $mdSidenav, $mdDialog) {
    this.$timeout = $timeout;
    this.$mdSidenav = $mdSidenav;
    this.$mdDialog = $mdDialog;
  }

  toggleMenu () {
    this.$mdSidenav('left').toggle()
  }

  contactDialog (ev) {
    this.$mdDialog.show(
      this.$mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Contact')
        .htmlContent(`
          <div class="contact" layout="column">
            <div flex class="contact__item">
              <i class="fa fa-envelope"></i> <a href="mailto:nick@wehatenick.com">nick@wehatenick.com</a>
            </div>
            <div flex class="contact__item">
              <i class="fa fa-phone"></i> <a href="tel:7757727446">(775) 772-7446</a>
            </div>
            <div flex class="contact__item">
              <i class="fa fa-home"></i> Seattle, WA
            </div>
          </div>
        `)
        .ariaLabel('Contact info')
        .ok('Close')
        .targetEvent(ev)
    );
  }

  logoAlbumDialog (ev) {
    debugger;
    this.$mdDialog.show(
      this.$mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Logo design')
        .htmlContent(`
          <p>Hello there</p>
          <a data-flickr-embed="true"  href="https://www.flickr.com/photos/151603805@N03/albums/72157687528770056" title="Logo Design"><img src="https://farm5.staticflickr.com/4342/36411722802_e752e840f3_z.jpg" width="640" height="298" alt="Logo Design"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
        `)
        .ariaLabel('Contact info')
        .ok('Close')
        .targetEvent(ev)
    );
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
      'Behavioral analytics',
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
      'Hewlett Packard Enterprise'
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
