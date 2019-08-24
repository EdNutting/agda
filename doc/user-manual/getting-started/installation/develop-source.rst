.. _installation-develop-source:

**************************************************
Installation using development-version from source
**************************************************

We assume you are familiar with Agda, Stack or Cabal and general build-system magic.

.. _installation-develop-source-stack:

Using Stack with `make`
-----------------------

1. Fork & clone the `Agda repository <https://github.com/agda/agda>`_ and checkout whichever branch you're intending to work on.

2. Install the :ref:`prerequisites <prerequisites>`

3. TODO

*This section was last updated on: 24th August 2019 by Ed Nutting*


Using Stack without `make`
--------------------------

1. Fork & clone the `Agda repository <https://github.com/agda/agda>`_ and checkout whichever branch you're intending to work on.

2. Install the :ref:`prerequisites <prerequisites>`

3. TODO

*This section was last updated on: 24th August 2019 by Ed Nutting*


.. _installation-develop-source-cabal:


Using Cabal with `make`
-----------------------

1. Fork & clone the `Agda repository <https://github.com/agda/agda>`_ and checkout whichever branch you're intending to work on.

2. Install the :ref:`prerequisites <prerequisites>`

3. In the top-level directory of the Agda source tree:

  * **Not on Mac/OSX:**

    Install Agda (including a compiled Emacs mode) using the following command:

    .. code-block:: bash

      make install

  * **On Mac/OSX:**

    ICU is installed in a non-standard location so you need to specify its 
    location on the command line:

    .. code-block:: bash

      make install-bin CABAL_OPTS='--extra-lib-dirs=/usr/local/opt/icu4c/lib --extra-include-dirs=/usr/local/opt/icu4c/include'

*This section was last updated on: 24th August 2019 by Ed Nutting*


Using Cabal without `make`
--------------------------

1. Fork & clone the `Agda repository <https://github.com/agda/agda>`_ and checkout whichever branch you're intending to work on.

2. Install the :ref:`prerequisites <prerequisites>`

3. In the top-level directory of the Agda source tree
   follow the :ref:`instructions <installation-from-hackage>` for
   installing Agda from Hackage
   
   **except run ``cabal install`` instead of ``cabal install Agda``**

*This section was last updated on: 24th August 2019 by Ed Nutting*
