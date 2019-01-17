import CountDown from './count_down';
import ServiceWorkerFactory from './service_worker';
import Tracker, { Categories } from './Tracker';

Tracker.trackEvent(Categories.PAGE_LOAD);
new CountDown(1548050400000);
new ServiceWorkerFactory();
