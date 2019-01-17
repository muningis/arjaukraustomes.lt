interface MinimalAnalytics {
    trackEvent(category: string, action?: string, label?: string, value?: string): void;
    trackException(description: string, fatal: string): void;
}

declare interface Window {
    ma: MinimalAnalytics;
}