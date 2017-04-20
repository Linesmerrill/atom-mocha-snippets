'use babel';

import generateSnippets from './generate-snippets';
import { CompositeDisposable } from 'atom';

export default {

  modalPanel: null,
  subscriptions: null,

  activate(state) {
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    this.subscriptions.add(atom.config.onDidChange('atom-mocha-snippets', (value) => {
      generateSnippets();
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
    this.atomMochaSnippetsView.destroy();
  },
};
