import CountDown from './count_down';
import ServiceWorkerFactory from './service_worker';
import Tracker from './tracker';

Tracker.trackPageLoad();
new CountDown(1548050400000);
new ServiceWorkerFactory();
