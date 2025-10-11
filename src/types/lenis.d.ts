declare module 'lenis' {
	export default class Lenis {
		constructor(options?: {
			autoRaf?: boolean;
			lerp?: number;
			smoothWheel?: boolean;
			smoothTouch?: boolean;
			duration?: number;
			easing?: (t: number) => number;
		});
		on(event: string, callback: (e: any) => void): void;
		raf(time: number): void;
		destroy(): void;
	}
}
