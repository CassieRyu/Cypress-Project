
import { addCleanupDiffOutputCommand, addMatchImageSnapshotCommand } from 'cypress-image-diff/command';

addMatchImageSnapshotCommand({
	timeout: '60000',
	failureThreshold: 0.05, // threshold for entire image
	failureThresholdType: 'percent', // percent of image or number of pixels
	customDiffConfig: { threshold: 0.1 }, // threshold for each pixel
	capture: 'viewport', // capture viewport in screenshot
	fullPage: true
});

addCleanupDiffOutputCommand();