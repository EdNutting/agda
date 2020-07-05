.. _installation-from-hackage:

*************************
Installation from Hackage
*************************

You can install the latest released version of Agda from `Hackage
<https://hackage.haskell.org/package/Agda>`_. 

1. Install the :ref:`prerequisites <prerequisites>`
2. Install Agda using the commands:

.. code-block:: bash

  cabal update
  cabal install Agda

3. (Optional) Configure the Emacs mode :ref:`using these instructions <installation-emacs-mode>`.

Working inside cabal Sanboxes
=============================

If you are using cabal sandboxes (e.g. if you use `Nix-style Local Builds
<https://www.haskell.org/cabal/users-guide/nix-local-build-overview.html>`_),
by using Cabal 3.0.0.0 or by running ``cabal v2-install``, you'll get the
following error when compiling with the GHC backend::

  Compilation error:

  MAlonzo/RTE.hs:13:1: error:
      Failed to load interface for ‘Numeric.IEEE’
      Use -v to see a list of the files searched for.

This is because packages are sandboxed in ``$HOME/.cabal/store``
and you have to explicitly register required packaged in a `GHC environment
<https://downloads.haskell.org/~ghc/latest/docs/html/users_guide/packages.html#package-environments>`_.
There are two solutions to this listed below.

.. NOTE::

  Actually it is not necessary to register the Agda library (only IEEE754
  is required), but doing so forces Cabal to install the same version of `ieee754
  <http://hackage.haskell.org/package/ieee754>`_ as used by Agda.


Adding Agda/IEEE754 as default packages
---------------------------------------

This can be done by running the following command:

.. code-block:: bash

  cabal v2-install --lib Agda ieee754

This will register `ieee754
<http://hackage.haskell.org/package/ieee754>`_ in the GHC default environment.


Keeping a clean default environment
-----------------------------------

You may want to keep the default environment clean, e.g. to avoid conflicts with
other installed packages. In this case you can a create separate Agda
environment by running:

.. code-block:: bash

  cabal v2-install --package-env agda --lib Agda ieee754

You then have to set the ``GHC_ENVIRONMENT`` when you invoke Agda:

.. code-block:: bash

    GHC_ENVIRONMENT=agda agda -c hello-world.agda
