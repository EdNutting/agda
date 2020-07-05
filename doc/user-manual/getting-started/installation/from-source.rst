.. _installation-development-version:

Installation from Source
========================

.. _installation-from-source:

This also describes how to install development versions of Agda.


.. _installation-from-source-using-cabal:

Using cabal
===========

After getting the development version following the instructions in
the `Agda wiki <https://wiki.portal.chalmers.se/agda/pmwiki.php>`_:

* Install the :ref:`prerequisites <prerequisites>`

* In the top-level directory of the Agda source tree

  * Follow the :ref:`instructions <installation-from-hackage>` for
    installing Agda from Hackage (except run ``cabal install``
    instead of ``cabal install Agda``) or

  * You can try to install Agda (including a compiled Emacs mode) by
    running the following command:

    .. code-block:: bash

      make install

    Note that on a Mac, because ICU is installed in a non-standard location,
    you need to specify this location on the command line:

    .. code-block:: bash

      make install-bin CABAL_OPTS='--extra-lib-dirs=/usr/local/opt/icu4c/lib --extra-include-dirs=/usr/local/opt/icu4c/include'


.. _installation-from-source-using-stack:

Using stack
===========

TODO