export const Categories = {
    PAGE_LOAD: 'page_load',
    METRIC: 'metric'
};
export const Actions = {
    PAGE_LOAD: 'page_load'
}

class Tracker {
    trackPageLoad() {
        this.trackEvent(Categories.PAGE_LOAD);
        this.trackEvent(
            Categories.METRIC,
            Actions.PAGE_LOAD,
            undefined,
            (window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart)
        );
    }

    trackEvent(category: string, action?: string, label?: string, value?: string | number | boolean) {
        window.ma.trackEvent(category, action, label, value);
    }
}

const tracker = new Tracker;

export default tracker;
