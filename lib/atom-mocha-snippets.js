'use babel';

import AtomMochaSnippetsView from './atom-mocha-snippets-view';
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

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'atom-mocha-snippets:toggle': () => this.toggle()
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

  toggle() {
    console.log('AtomMochaSnippets was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
