/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import assert from 'assert';
import { availableSpecs, getCompletionItemsFromSpecs } from './terminalSuggestMain';

describe('getCompletionItemsFromSpecs', () => {
	it('should return completion items', async () => {
		const result = getCompletionItemsFromSpecs(availableSpecs, { commandLine: '', cursorPosition: 0 }, new Set(), '');
		assert(result === undefined);
	});
});
