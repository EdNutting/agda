.. _installation:

************
Installation
************

There are several ways to install Agda:

* Using a :ref:`released source <installation-from-hackage>` package
  from `Hackage <https://hackage.haskell.org/package/Agda>`_
  (aka. using cabal)

* Using a :ref:`binary package <prebuilt-packages>` prepared for your
  platform

* Using cabal or stack to install the :ref:`source code
  <installation-from-source>` from the Git `repository
  <https://github.com/agda/agda>`_

Agda can be installed using different flags (see :ref:`installation-flags`).

After installing Agda it is recommended that you :ref:`configure the Emacs mode <installation-emacs-mode>`.


.. _installation-flags:

Installation Flags
==================

When installing Agda the following flags can be used:

.. option:: cpphs

     Use `cpphs <https://hackage.haskell.org/package/cpphs>`_ instead
     of cpp. Default: off.

.. option:: debug

     Enable debugging features that may slow Agda down. Default: off.

.. option:: enable-cluster-counting

     Enable the :option:`--count-clusters` flag. Note that if
     ``enable-cluster-counting`` is ``False``, then the
     :option:`--count-clusters` flag triggers an error
     message. Default: off.

.. _installing-multiple-versions-of-Agda:

Installing multiple versions of Agda
====================================

Multiple versions of Agda can be installed concurrently by using the --program-suffix flag.
For example using cabal:

.. code-block:: bash

  cabal install Agda-2.6.1 --program-suffix=-2.6.1

will install version 2.6.1 under the name agda-2.6.1. You can then switch to this version
of Agda in Emacs via

.. code-block:: bash

   C-c C-x C-s 2.6.1 RETURN

Switching back to the standard version of Agda is then done by:

.. code-block:: bash

   C-c C-x C-s RETURN
