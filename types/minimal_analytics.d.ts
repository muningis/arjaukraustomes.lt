interface MinimalAnalytics {
    trackEvent(category: string, action?: string, label?: string, value?: string | number | boolean): void;
    trackException(description: string, fatal: string): void;
}

declare interface Window {
    ma: MinimalAnalytics;
}