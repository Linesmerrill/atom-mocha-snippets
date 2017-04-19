'use babel';

import AtomMochaSnippetsView from './atom-mocha-snippets-view';
import generateSnippets from './generate-snippets';
import { CompositeDisposable } from 'atom';

export default {

  atomMochaSnippetsView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.atomMochaSnippetsView = new AtomMochaSnippetsView(state.atomMochaSnippetsViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.atomMochaSnippetsView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    this.subscriptions.add(atom.config.onDidChange('atom-mocha-snippets', (value) => {
      generateSnippets();
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.atomMochaSnippetsView.destroy();
  },

  serialize() {
    return {
      atomMochaSnippetsViewState: this.atomMochaSnippetsView.serialize()
    };
  },
};
