import CountDown from './count_down';
import ServiceWorkerFactory from './service_worker';

switch (location.pathname) {
    case '/3':
    case '/13':
        new CountDown(1548342000000, '.js-countdown');
        break;
    case '/11':
    case '/33':
        new CountDown(1548428400000, '.js-countdown');
        break;
    default:
}

new ServiceWorkerFactory();
