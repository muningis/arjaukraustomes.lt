export const enum Categories {
    PAGE_LOAD = 'page_load'
};

class Tracker {
    trackEvent(category: Categories) {
        window.ma.trackEvent(category);
    }
}

const tracker = new Tracker;

export default tracker;
