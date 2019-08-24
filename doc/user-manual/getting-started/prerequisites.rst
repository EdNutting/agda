.. _prerequisites:

*************
Prerequisites
*************

.. _prerequisites-prebuilt:

When installing using pre-built packages
========================================

*This section was last updated on: 24th August 2019 by Ed Nutting*


.. _prerequisites-hackage:

When installing using Hackage
=============================

You need recent versions of the following programs to compile Agda:

* GHC:           https://www.haskell.org/ghc/

  + Agda have been tested with GHC 8.0.2, 8.2.2, 8.4.4 and 8.6.5.

* cabal-install: https://www.haskell.org/cabal/
* Alex:          https://www.haskell.org/alex/
* Happy:         https://www.haskell.org/happy/
* GNU Emacs:     http://www.gnu.org/software/emacs/

You should also make sure that programs installed by *cabal-install*
are on your shell's search path.

For instructions on installing a suitable version of Emacs under
Windows, see :ref:`emacs-under-windows`.

Non-Windows users need to ensure that the development files for the C
libraries *zlib** and *ncurses** are installed (see http://zlib.net
and http://www.gnu.org/software/ncurses/). Your package manager may be
able to install these files for you. For instance, on Debian or Ubuntu
it should suffice to run

.. code-block:: bash

  apt-get install zlib1g-dev libncurses5-dev

as root to get the correct files installed.

Optionally one can also install the `ICU
<http://site.icu-project.org>`_ library, which is used to implement
the ``--count-clusters`` flag. Under Debian or Ubuntu it may suffice
to install *libicu-dev*. Once the ICU library is installed one can
hopefully enable the ``--count-clusters`` flag by giving the
``-fenable-cluster-counting`` flag to *cabal install*.

*This section was last updated on: 24th August 2019 by Ed Nutting*


.. _prerequisites-source:

When installing using source
============================

There are two ways to install from source. 
Use whichever one has been most successful for you in the past.
If this is your first time using Agda, use whichever method has 
worked for you with other Haskell-based tools in the past.
If this is your fist time using any Haskell-based tool - good luck (try Stack first).

.. _prerequisites-source-stack:

Using Stack
-----------

TODO

*This section was last updated on: 24th August 2019 by Ed Nutting*


.. _prerequisites-source-cabal:

Using Cabal
-----------

TODO

*This section was last updated on: 24th August 2019 by Ed Nutting*



.. _emacs-under-windows:

Installing Emacs under Windows
==============================

A precompiled version of Emacs 26.1, with the necessary mathematical
fonts, is available at http://www.cs.uiowa.edu/~astump/agda.

*This section was last updated on: 24th August 2019 by Ed Nutting*
