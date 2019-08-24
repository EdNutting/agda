.. _installation-from-hackage:

**************************
Installation using Hackage
**************************

You can install the latest released version of Agda from `Hackage
<https://hackage.haskell.org/package/Agda>`_. Install the
:ref:`prerequisites <prerequisites-hackage>` and then run the following
commands:

.. code-block:: bash

  cabal update
  cabal install Agda
  agda-mode setup

The last command tries to set up Emacs for use with Agda via the
:ref:`Emacs mode <emacs-mode>`. As an alternative you can copy the
following text to your *.emacs* file:

.. code-block:: emacs

  (load-file (let ((coding-system-for-read 'utf-8))
                  (shell-command-to-string "agda-mode locate")))

It is also possible (but not necessary) to compile the Emacs mode's
files:

.. code-block:: bash

  agda-mode compile

This can, in some cases, give a noticeable speedup.

**Warning**: If you reinstall the Agda mode without recompiling the
Emacs Lisp files, then Emacs may continue using the old, compiled
files.

*This section was last updated some time before: 24th August 2019 by an unknown author*
