/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * ResonanceIDE product detection utilities.
 *
 * This module provides helpers to detect whether the current build is ResonanceIDE,
 * enabling feature guards that follow the "disable before delete" philosophy.
 */

import { IProductConfiguration } from './product.js';

/**
 * The application name used by ResonanceIDE builds.
 */
export const RESONANCE_IDE_APPLICATION_NAME = 'resonance-ide';

/**
 * Checks if the current product configuration represents a ResonanceIDE build.
 *
 * Use this function to guard features that should be disabled in ResonanceIDE
 * but preserved for upstream VS Code compatibility.
 *
 * @param product - The product configuration object
 * @returns true if running as ResonanceIDE, false otherwise
 */
export function isResonanceIDE(product: IProductConfiguration): boolean {
	return product.applicationName === RESONANCE_IDE_APPLICATION_NAME;
}
