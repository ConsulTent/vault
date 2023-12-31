/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

/* eslint-disable ember/no-observers */
import { inject as service } from '@ember/service';
import { assert } from '@ember/debug';
import Helper from '@ember/component/helper';
import { observer } from '@ember/object';

export default Helper.extend({
  version: service(),
  onFeaturesChange: observer('version.version', function () {
    this.recompute();
  }),
  compute([sku]) {
    if (sku !== 'OSS' && sku !== 'Enterprise') {
      assert(`${sku} is not one of the available values for Vault versions.`, false);
      return false;
    }
    return this.get(`version.is${sku}`);
  },
});
